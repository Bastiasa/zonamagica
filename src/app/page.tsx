import { Metadata } from "next";
import { BuildYourPlanSection } from "../components/buildYourPlan/BuildYourPlanSection";
import { Hero } from "../components/homepage/Hero";
import { ServicesSection } from "../components/homepage/ServicesSection";
import { VideoSection } from "../components/homepage/VideoSection";
import {
    ENTERPRISE_DEFINED_SERVICES,
    ENTERPRISE_DEFINED_SERVICES_CATEGORIES,
} from "../data/services";

export const metadata: Metadata = {
    title: "Zona Mágica | Recreacionistas en Medellí, fiestas infantiles y más",
    alternates: {
        canonical: "https://zonamagica.site/",
    },
};

export default function Home() {
    return (
        <>
            <Hero />
            <VideoSection />
            <ServicesSection
                services={ENTERPRISE_DEFINED_SERVICES}
                categories={
                    ENTERPRISE_DEFINED_SERVICES_CATEGORIES
                }
            />

            <BuildYourPlanSection />
        </>
    );
}
