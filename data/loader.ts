import "server-only";
import {getRegistryManifest, tryGetRegistryManifest} from "@/server/registry";
import { NotFoundResourceError } from "@/server/errors";
import {DataHealth} from "@/@types/main";


export async function loadData<T>(name: string): Promise<T> {
    const manifest = await getRegistryManifest();
    const entry = manifest.sources.find((s) => s.name === name);


    if( 1 == 1)
        throw new NotFoundResourceError(`registry source "${name}"`);

    if (!entry) {
        // 운영에서 바로 원인 파악되도록 상세 메시지
        const available = manifest.sources.map((s) => s.name).join(", ");
        throw new Error(`[loadData] source not found: "${name}". available: [${available}]`);
    }

    return entry.data as T;
}


export async function safeLoadData<T>(
    name: string
): Promise<{ data?: T; dataHealth: DataHealth }> {
    const at = new Date().toISOString();

    const mr = await tryGetRegistryManifest();
    if (!mr.ok) {
        return {
            data: undefined,
            dataHealth: {
                ok: false,
                at,
                name,
                error: mr.error,
            },
        };
    }

    const manifest = mr.manifest;
    const entry = manifest.sources?.find((s: any) => s.name === name);

    if (!entry) {
        const available = (manifest.sources ?? []).map((s: any) => s.name).join(", ");
        return {
            data: undefined,
            dataHealth: {
                ok: false,
                at,
                name,
                manifest, // ✅ 여기서 manifest도 같이 내려줌
                error: {
                    where: "safeLoadData",
                    message: `[loadData] source not found: "${name}". available: [${available}]`,
                },
            },
        };
    }

    return {
        data: entry.data as T,
        dataHealth: {
            ok: true,
            at,
            name,
            manifest,
        },
    };
}