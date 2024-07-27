"use client";
import useQrGenerator from "@/hooks/useQrGenerator";
import QRCode from "react-qr-code";
import { Footer } from "./footer";
import { Navbar } from "./navbar";
export default function Home() {
    const { content, download, setContent } = useQrGenerator();
    return (
        <>
            <Navbar />
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <section>
                    <h2 className="text-2xl mb-4">
                        Generador de QR{" "}
                        <span className="text-orange-500">Code</span>
                    </h2>
                    <article>
                        <div id="qrcode">
                            <QRCode value={content} />
                        </div>
                        <input
                            id="input"
                            className="mt-4 w-full p-2 rounded focus:outline-none"
                            type="text"
                            placeholder="Url"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </article>
                    <article className="mt-4">
                        <button
                            onClick={() => {
                                setContent("");
                            }}
                            className="w-full p-2 rounded ring-1 ring-orange-500 text-orange-500 bg-white text-orage-500 hover:text-white hover:bg-orange-500 focus:outline-none mb-2"
                        >
                            Limpiar
                        </button>
                        <button
                            onClick={download}
                            className="w-full p-2 rounded bg-orange-500 text-white hover:bg-orange-600 focus:outline-none"
                        >
                            Guardar
                        </button>
                    </article>
                </section>
            </main>
            <Footer />
        </>
    );
}
