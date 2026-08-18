import type { Metadata } from "next";

import { cn } from "@/src/utils";
import { AppShell, AppShellSection } from "@mantine/core";

import "./globals.css";
import { Providers } from "../components/Providers";
import MainLayoutHeader from "../layouts/main/Header";
import MainLayoutFooter from "../layouts/main/Footer";
import { withBasePath } from "../utils/withBasepath";
import {
    GANoscript,
    GAInit,
    GoogleConsent,
} from "../components/GAnalytics";
import CookieBanner from "../components/ConsentBanner";
import { ConsentManager } from "../components/ConsentManager";
import { APP_THEME } from "../data/theme";

export const metadata: Metadata = {
    title: "Zona Mágica | Fiestas Infantiles y Recreación en Medellín",
    description:
        "Haz que tus celebraciones sean inolvidables con Zona Mágica en Medellín y Antioquia. Ofrecemos recreacionistas, inflables, shows de títeres y hora loca.",
    keywords:
        "fiestas infantiles Medellín, recreacionistas Antioquia, Zona Mágica Medellín, animación de eventos, pintucaritas, show de títeres, payasos, alquiler de inflables, personajes infantiles, hora loca, paquetes de fiesta",
    authors: [
        {
            name: "Zona Mágica",
        },

        {
            name: "Luis Bastidas",
            url: "https://bastiasa.github.io",
        },
    ],
    themeColor: APP_THEME.colors?.magic?.[6],
};

export default function RootLayout({
    children,
}: LayoutProps<"/">) {
    return (
        <html
            lang="es-CO"
            className={cn(
                "h-full",
                "antialiased",
                "font-sans",
            )}
        >
            <head>
                <GAInit />
                <GoogleConsent />

                <link
                    rel="shortcut icon"
                    href={withBasePath("/favicon.png")}
                    type="image/png"
                />

                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                ></link>
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin=""
                ></link>
                <link
                    href="https://fonts.googleapis.com/css2?family=Englebert&display=swap"
                    rel="stylesheet"
                ></link>
            </head>
            <body className="min-h-screen flex flex-col">
                <GANoscript />
                <ConsentManager />

                <Providers>
                    <MainLayoutHeader />

                    <main className="flex-1">
                        {children}
                    </main>

                    <MainLayoutFooter />

                    <CookieBanner />
                </Providers>
            </body>
        </html>
    );
}
