import { useState } from "react";
import { toPng } from "html-to-image";

export default function useQrGenerator() {
    const [content, setContent] = useState<string>("");
    const download = () => {
        console.log("click");
        const node = document.getElementById("qrcode");
        toPng(node as any, { cacheBust: true })
            .then(function (dataUrl) {
                let link = document.createElement("a");
                link.href = dataUrl;
                link.download = "qrcode.png";
                link.style.display = "none";
                link.click();
            })
            .catch(function (error) {
                console.error("oops, something went wrong!", error);
            });
    };
    return {
        content,
        setContent,
        download,
    };
}
