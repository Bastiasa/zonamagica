import { AppShellSection } from "@mantine/core";
import { Hero } from "../components/homepage/Hero";
import { ServicesSection } from "../components/homepage/ServicesSection";
import {
    ENTERPRISE_DEFINED_SERVICES,
    ENTERPRISE_DEFINED_SERVICES_CATEGORIES,
} from "../data/services";
import { BuildYourPlanSection } from "../components/buildYourPlan/BuildYourPlanSection";

export default function Home() {
    return (
        <>
            <Hero />
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
