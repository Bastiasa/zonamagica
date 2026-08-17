import { AppShellSection } from "@mantine/core";
import { Hero } from "../components/homepage/Hero";
import { ServicesSection } from "../components/homepage/ServicesSection";
import { ENTERPRISE_DEFINED_SERVICES } from "../data/services";

export default function Home() {
    return (
        <>
            <Hero />
            <ServicesSection
                services={ENTERPRISE_DEFINED_SERVICES}
            />
        </>
    );
}
