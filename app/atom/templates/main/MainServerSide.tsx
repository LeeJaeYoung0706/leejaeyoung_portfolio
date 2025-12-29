import {loadData, safeLoadData} from "@/data/loader";
import Main from "@/app/atom/templates/main/main";
import {MainImageData} from "@/@types/main";
import {getRegistryManifest} from "@/server/registry";
import {getRegistryHealth} from "@/server/registry-health";


export default async function MainServerSide({children}: ComponentChildrenPropsInterface) {
    // const data = await loadData<MainImageData>("main");
    // const dataHealth = await getRegistryManifest();

    const registryHealth = await getRegistryHealth();

    let data: MainImageData | null = null;
    let manifest: any = null;
    let runtimeError: { where: string; message: string; stack?: string } | null = null;

    try {
        data = await loadData<MainImageData>("main");
    } catch (e: any) {
        runtimeError = { where: "loadData(main)", message: e?.message ?? String(e), stack: e?.stack };
    }

    try {
        manifest = await getRegistryManifest();
    } catch (e: any) {
        runtimeError = runtimeError ?? { where: "getRegistryManifest", message: e?.message ?? String(e), stack: e?.stack };
    }

    const dataHealth = {
        registryHealth, // ✅ predev/prebuild 시점 결과(파일)
        manifest,       // ✅ 런타임에서 읽은 manifest (되면)
        runtimeError,   // ✅ 런타임에서 발생한 에러(있으면)
    };

    return   <Main data={data ?? undefined} dataHealth={dataHealth}>
        {children}
    </Main>
}