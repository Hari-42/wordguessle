import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FaGithub } from "react-icons/fa"; // Make sure to install react-icons

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "wordleguessle",
    description: "This project is inspired by the New York Times Wordle.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
        >
        <main className="flex-grow">{children}</main>
        <footer className="w-full border-t bg-white p-4 flex justify-between items-center text-sm text-gray-600">
            <span className="font-mono">wordguessle</span>
            <span>© wordguessle, All rights reserved</span>
            <a
                href="https://github.com/Hari-42"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black"
            >
                <FaGithub size={20} />
            </a>
        </footer>
        </body>
        </html>
    );
}
