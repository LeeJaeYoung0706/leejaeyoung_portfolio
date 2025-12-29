import "server-only";
import fs from "node:fs/promises";
import path from "node:path";
import { unstable_cache } from "next/cache";

function healthFilePath() {
    return path.join(process.cwd(), "data", "registry.health.json");
}

export type RegistryHealth = {
    generatedAt: string;
    ok: boolean;
    failedCount: number;
    failed: Array<{ name: string; file: string; ok: false; reason?: string }>;
    okCount: number;
};

export const getRegistryHealth = unstable_cache(
    async (): Promise<RegistryHealth | null> => {
        try {
            const txt = await fs.readFile(healthFilePath(), "utf-8");
            return JSON.parse(txt) as RegistryHealth;
        } catch {
            // health 파일이 없으면(최초 실행 등) null로 처리
            return null;
        }
    },
    ["registry.health.json"],
    { revalidate: 10 }
);