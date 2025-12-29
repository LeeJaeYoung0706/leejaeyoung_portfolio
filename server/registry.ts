import "server-only";
import path from "node:path";
import fs from "node:fs/promises";
import { unstable_cache } from "next/cache";
import type { RegistryManifest } from "@/@types/main";

function manifestPath() {
    return path.join(process.cwd(), "data", "registry.generated.json");
}

async function readManifest(): Promise<RegistryManifest> {
    const txt = await fs.readFile(manifestPath(), "utf-8");
    return JSON.parse(txt) as RegistryManifest;
}

/**
 * 개발 중 생성 파일이 바뀔 수 있으니 revalidate를 짧게.
 * 운영에서 빌드 산출물로 고정이면 더 길게(또는 false로) 조정 가능.
 */
export const getRegistryManifest = unstable_cache(
    async () => readManifest(),
    ["registry.generated.json"],
    { revalidate: 60 }
);


export async function tryGetRegistryManifest(): Promise<
    | { ok: true; manifest: RegistryManifest }
    | { ok: false; error: { message: string; stack?: string; where: string } }
> {
    try {
        const manifest = await getRegistryManifest();
        return { ok: true, manifest };
    } catch (e: any) {
        return {
            ok: false,
            error: {
                where: "getRegistryManifest",
                message: e?.message ?? String(e),
                stack: e?.stack,
            },
        };
    }
}