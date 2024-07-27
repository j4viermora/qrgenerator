import React from "react";

export const Navbar = () => {
    return (
        <div>
            <nav className="bg-orange-500 m-4 rounded-lg shadow-sm">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a
                        href="/"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Generador de QR
                        </span>
                    </a>
                </div>
            </nav>
        </div>
    );
};
