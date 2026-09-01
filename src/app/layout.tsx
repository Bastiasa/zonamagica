import type { Metadata } from "next";

import { cn } from "@/src/utils";

import CookieBanner from "../components/ConsentBanner";
import { ConsentManager } from "../components/ConsentManager";
import {
    GAInit,
    GANoscript,
    GoogleConsent,
} from "../components/GAnalytics";
import Ld from "../components/Ld";
import { Providers } from "../components/Providers";
import { CONTACT } from "../data/contact";
import { APP_THEME } from "../data/theme";
import MainLayoutFooter from "../layouts/main/Footer";
import MainLayoutHeader from "../layouts/main/Header";
import websitePage from "../utils/websitePage";
import { withBasePath } from "../utils/withBasepath";
import "./globals.css";

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

const BusinessLd = () => {
    const business = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": websitePage("#business"),
        name: "Zona Mágica",
        url: websitePage("/"),
        description: metadata.description,
        telephone: CONTACT.telephone,
        address: CONTACT.address,

        addressLocality: "Medellín",
        addressRegion: "Antioquia",
        addressCountry: "CO",

        streetAddress: CONTACT.address,
        postalCode: "055420",

        areaServed: [
            {
                "@type": "City",
                name: "Medellín",
            },

            {
                "@type": "City",
                name: "Envigado",
            },
            {
                "@type": "City",
                name: "Itagüí",
            },
            {
                "@type": "City",
                name: "Bello",
            },
            {
                "@type": "City",
                name: "Sabaneta",
            },
        ],

        image: websitePage("/logo.webp"),
        logo: websitePage("/logo.webp"),
    };

    const website = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": websitePage("#website"),
        url: websitePage("/"),
        name: "Zona Mágica",
        description: metadata.description,
        inLanguage: "es-CO",
        publisher: {
            "@id": websitePage("#business"),
        },
    };

    return (
        <>
            <Ld content={website} />
            <Ld content={business} />
        </>
    );
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
                <GoogleConsent />
                <GAInit />

                <link
                    rel="shortcut icon"
                    href={withBasePath("/favicon.webp")}
                    type="image/png"
                />

                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin=""
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Englebert&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
                    rel="stylesheet"
                ></link>
            </head>
            <body className="min-h-screen flex flex-col">
                <BusinessLd />

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
