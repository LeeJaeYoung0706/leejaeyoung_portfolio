import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

type Entry = {
    name: string;
    file: string;
};

function isJsonSafe(v: unknown) {
    try {
        JSON.stringify(v);
        return true;
    } catch {
        return false;
    }
}

async function main() {
    const root = process.cwd();
    const sourcesDir = path.join(root, "data", "sources");
    const outJson = path.join(root, "data", "registry.generated.json");
    const outTs = path.join(root, "data", "registry.generated.ts");

    const files = (await fs.readdir(sourcesDir))
        .filter((f) => /_data\.ts$/.test(f))
        .sort();

    const entries: Entry[] = files.map((file) => ({
        file,
        name: file.replace(/_data\.ts$/, ""),
    }));

    const results: Array<{
        name: string;
        file: string;
        ok: boolean;
        reason?: string;
        data?: unknown;
    }> = [];

    for (const e of entries) {
        try {
            const fullPath = path.join(sourcesDir, e.file);
            const url = pathToFileURL(fullPath).href;

            const mod: any = await import(url);
            if (typeof mod.getData !== "function") {
                results.push({ ...e, ok: false, reason: "getData export missing" });
                continue;
            }

            const data = await mod.getData();
            if (!isJsonSafe(data)) {
                results.push({ ...e, ok: false, reason: "result is not JSON-serializable" });
                continue;
            }

            results.push({ ...e, ok: true, data });
        } catch (err: any) {
            results.push({ ...e, ok: false, reason: err?.message ?? String(err) });
        }
    }

    const okOnly = results.filter((r) => r.ok).map((r) => ({
        name: r.name,
        file: r.file,
        data: r.data,
    }));

    await fs.writeFile(outJson, JSON.stringify({ generatedAt: new Date().toISOString(), sources: okOnly }, null, 2), "utf-8");

    // 타입/편의용 TS 래퍼(Next에서 직접 import하지 않아도 됨)
    const ts = `/* AUTO-GENERATED. DO NOT EDIT. */
export type RegistryJson = {
  generatedAt: string;
  sources: Array<{ name: string; file: string; data: unknown }>;
};

export const REGISTRY_JSON_PATH = "data/registry.generated.json";
`;
    await fs.writeFile(outTs, ts, "utf-8");

    const failed = results.filter((r) => !r.ok);
    // if (failed.length) {
    //     // 실패를 CI에서 잡고 싶으면 exit code 1
    //     console.error("[gen-registry] failed sources:", failed);
    //     process.exitCode = 1;
    // } else {
    //     console.log("[gen-registry] ok:", okOnly.length);
    // }

    const healthPath = path.join(root, "data", "registry.health.json");

    const healthPayload = {
        generatedAt: new Date().toISOString(),
        ok: failed.length === 0,
        failedCount: failed.length,
        failed,     // [{name,file,ok:false,reason}]
        okCount: okOnly.length,
    };

    await fs.writeFile(healthPath, JSON.stringify(healthPayload, null, 2), "utf-8");

    if (failed.length) {
        console.error("[gen-registry] failed sources:", failed);
        process.exitCode = 1;
    }
}


main();