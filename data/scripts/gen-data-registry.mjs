import fs from "node:fs";
import path from "node:path";
import {pathToFileURL} from "node:url";

const root = process.cwd();

function exists(p) {
    try {
        fs.accessSync(p);
        return true;
    } catch {
        return false;
    }
}

const sourcesDir = path.join(root, "data", "sources");
const outTs = path.join(root, "data", "registry.generated.ts");
const outJson = path.join(root, "data", "registry.generated.json"); // ✅ 추가

if (!exists(sourcesDir)) {
    throw new Error(`[gen] sources dir not found: ${sourcesDir}`);
}

const files = fs
    .readdirSync(sourcesDir)
    .filter((f) => /_data\.(ts|tsx|js|jsx)$/.test(f))
    .sort();

const imports = files.map((file, idx) => {
    const base = file.replace(/\.(ts|tsx|js|jsx)$/, ""); // stack_data
    const name = base.replace(/_data$/, "");            // stack
    const varName = `m${idx}`;
    const rel = `./sources/${base}`;                    // TS import용
    return {file, base, name, varName, rel};
});

async function validateModules() {
    const results = [];

    for (const m of imports) {

        console.log(m);
        try {
            // sourcesDir 내부 실제 파일 경로를 URL로 변환하여 동적 import
            const fullPath =
                path.join(sourcesDir, m.file);

            const url = pathToFileURL(fullPath).href;
            console.log(url);
            const mod = await import(url);
            console.log(mod);
            const ok = typeof mod.getData === "function";
            results.push({
                name: m.name,
                file: m.file,
                importFileUrl: url,
                ok,
                reason: ok ? undefined : "getData export missing",
            });

            console.log("ok = " , results);
        } catch (e) {
            console.log("error = " , e.message)

            results.push({
                name: m.name,
                file: m.file,
                ok: false,
                reason: `import failed: ${e?.message ?? String(e)}`,
            });
        }
    }

    return results;
}

const checks = await validateModules();
const failed = checks.filter((x) => !x.ok);

const manifest = {
    status: failed.length === 0 ? "SUCCESS" : "ERROR",
    generatedAt: new Date().toISOString(),
    sourcesDir: path.relative(root, sourcesDir),
    outTs: path.relative(root, outTs),
    modules: imports.map((x) => ({
        name: x.name,
        file: x.file,
        importPath: x.rel,
        expectedExport: "getData",
    })),
    checks,
    errors: failed.map((x) => ({
        name: x.name,
        file: x.file,
        reason: x.reason,
    })),
};

fs.writeFileSync(outJson, JSON.stringify(manifest, null, 2), "utf8");

if (files.length === 0) {
    const empty = `/* AUTO-GENERATED. DO NOT EDIT. */
export interface DataModule {
  key?: string;
  getData: (params?: any) => Promise<any>;
}

export const registry: Record<string, DataModule> = {};
`;
    fs.writeFileSync(outTs, empty, "utf8");
    process.exit(0);
}

const content = `/* AUTO-GENERATED. DO NOT EDIT. */
export interface DataModule {
  key?: string;
  getData: (params?: any) => Promise<any>;
}

${imports.map((x) => `import * as ${x.varName} from "${x.rel}";`).join("\n")}

export const registry: Record<string, DataModule> = {
${imports.map((x) => `  "${x.name}": ${x.varName} as unknown as DataModule,`).join("\n")}
};
`;

fs.writeFileSync(outTs, content, "utf8");

// 콘솔은 최소만 (원하면 제거 가능)
console.log(`[gen] registry -> ${path.relative(root, outTs)}`);
console.log(`[gen] manifest -> ${path.relative(root, outJson)}`);