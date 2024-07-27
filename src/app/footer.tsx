import React from "react";

const linkedinUrl = "https://www.linkedin.com/in/j4viermora/";

export const Footer = () => {
    return (
        <div>
            <footer className="bg-orange-500 rounded-lg shadow m-4">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-white sm:text-center ">
                        © {new Date().getFullYear()}{" "}
                        <a href={linkedinUrl} className="hover:underline">
                            Javier Mora™
                        </a>
                        . Todos los derechos reservados.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
                        <li>
                            <a
                                target="_blank"
                                href={linkedinUrl}
                                className="hover:underline text-white"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};
