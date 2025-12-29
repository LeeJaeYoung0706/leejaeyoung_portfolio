'use client'
import {useSearchParams} from "next/navigation";
import {useScrollPosition} from "@/hooks/useScrollPosition";
import MainView from "@/atom/templates/MainView";
import {Button} from "@/atom/atom/button/Button";
import {RussoOneFont} from "@/styles/font/fontStyle";
import Image from "next/image";
import {UpButtonStyle} from "@/atom/atom/button/ButtonStyles";
import ErrorSection from "@/atom/templates/error/ErrorSection";
import {MainPropsInterface} from "@/@types/main";
import {useMemo, useState} from "react";


export default function Main({children, data , dataHealth}: MainPropsInterface) {
    const [isTop, visibleTopButton, MoveTop] = useScrollPosition();
    const searchParams = useSearchParams();
    const [open, setOpen] = useState(false);

    const healthJson = useMemo(() => {
        if (!dataHealth) return "dataHealth: undefined";
        try {
            return JSON.stringify(dataHealth, null, 2);
        } catch {
            return "Failed to stringify dataHealth";
        }
    }, [dataHealth]);

    if (!data) return <ErrorSection/>;

    if (searchParams.get('pwd') !== process.env.NEXT_PUBLIC_DEFAULT_PWD) {
        return <ErrorSection/>;
    }

    return (
        <MainView>
            <div style={{position: "fixed", bottom: 12, right: 12, zIndex: 9999}}>
                <button
                    type="button"
                    onClick={() => setOpen(true)}
                    style={{
                        width: 28,
                        height: 28,
                        borderRadius: 999,
                        border: "1px solid #ccc",
                        background: "#fff",
                        cursor: "pointer",
                        fontWeight: 700,
                    }}
                    aria-label="Data Health Check"
                >
                    ?
                </button>
            </div>

            {open && (
                <div
                    onClick={() => setOpen(false)}
                    style={{
                        position: "fixed",
                        inset: 0,
                        background: "rgba(0,0,0,0.35)",
                        zIndex: 10000,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 16,
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            width: "min(900px, 95vw)",
                            maxHeight: "85vh",
                            background: "#fff",
                            borderRadius: 12,
                            border: "1px solid #ddd",
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <div
                            style={{
                                padding: "10px 12px",
                                borderBottom: "1px solid #eee",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <strong> Data Health Check (registry manifest) </strong>
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                style={{
                                    border: "1px solid #ccc",
                                    background: "#fff",
                                    borderRadius: 8,
                                    padding: "6px 10px",
                                    cursor: "pointer",
                                }}
                            >
                                Close
                            </button>
                        </div>

                        <pre style={{ margin: 0, padding: 12, overflow: "auto", fontSize: 12 }}>
              {healthJson}
            </pre>
                    </div>
                </div>
            )}

            {
                    visibleTopButton &&
                    <Button
                        content={
                            <Image src={data.mainImage[0].src} alt={data.mainImage[0].alt} fill
                                   sizes={data.mainImage[0].sizes}/>}
                        onClick={MoveTop}
                        font={RussoOneFont.className}
                        $style={UpButtonStyle}
                    />
                }
                {children}
        </MainView>
)
}
