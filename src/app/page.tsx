import { Metadata } from "next";
import { BuildYourPlanSection } from "../components/buildYourPlan/BuildYourPlanSection";
import { FaqSection } from "../components/faq/FaqSection";
import { Hero } from "../components/homepage/Hero";
import { ServicesSection } from "../components/homepage/ServicesSection";
import { VideoSection } from "../components/homepage/VideoSection";
import { ENTERPRISE_FREQUENTLY_ASKED_QUESTIONS } from "../data/faq";
import {
    ENTERPRISE_DEFINED_SERVICES,
    ENTERPRISE_DEFINED_SERVICES_CATEGORIES,
} from "../data/services";
import websitePage from "../utils/websitePage";

export const metadata: Metadata = {
    title: "Zona Mágica | Recreacionistas en Medellín, fiestas infantiles y más",
    alternates: {
        canonical: websitePage("/"),
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

            <FaqSection
                questions={
                    ENTERPRISE_FREQUENTLY_ASKED_QUESTIONS
                }
            />
        </>
    );
}
