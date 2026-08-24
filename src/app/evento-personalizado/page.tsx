import { BuildYourPlanSection } from "@/src/components/buildYourPlan/BuildYourPlanSection";
import websitePage from "@/src/utils/websitePage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Zona Mágica | Evento personalizado",
    alternates: {
        canonical: websitePage("/evento-personalizado"),
    },
};

export default () => {
    return (
        <>
            <BuildYourPlanSection />
        </>
    );
};
