type MainImageItem = {
    src: string;
    alt: string;
    sizes: string;
};

export type MainImageData = {
    mainImage: MainImageItem[];
};


interface MainPropsInterface extends ComponentChildrenPropsInterface {
    data: any;
    dataHealth?: any;
}

// export type RegistryManifest = {
//     generatedAt: string;
//     sourcesDir: string;
//     outTs: string;
//     modules: {
//         name: string;
//         file: string;
//         importPath: string;
//         expectedExport: string;
//     }[];
// };

export interface RegistryManifest {
    generatedAt: string;
    sources: Array<{
        name: string;
        file: string;
        data: unknown;
    }>;
}

export type DataHealth = {
    ok: boolean;
    at: string;
    name: string;
    error?: {
        message: string;
        stack?: string;
        where?: string;
    };
    manifest?: unknown; // 필요하면 RegistryManifest로
};