import Image from "next/image";

import { Group, Stack, Text, Title } from "@mantine/core";

import { ShimmerButton } from "@/components/ui/shimmer-button";

import LOGO_BANNER from "@/src/assets/logo_banner.png";
import HERO_BACKGROUND from "@/src/assets/homepage/hero.png";
import WHATSAPP_ICON from "@/src/assets/icons/whatsapp.svg";
import { ContactButton } from "../ContactButton";
import { IconBrandWhatsapp } from "@tabler/icons-react";

const MESSAGE = "¡Hola, me gustaría cotizar un evento!";
const URL_TO_WHATSAPP = `https://wa.me/+573043498228/?text=${encodeURIComponent(MESSAGE)}`;

export function Hero() {
    return (
        <Stack
            style={{
                zIndex: "1",
                position: "relative",
                backgroundImage: `url('${HERO_BACKGROUND.src}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                color: "white",
            }}
            py={200}
            px={"md"}
            align="center"
            justify={"center"}
        >
            <div className="absolute opacity-[.8] -z-1 bg-black inset-0"></div>

            <Title order={1} c={"white"} ta={"center"}>
                ¡Diversión sin límites!
            </Title>

            <Image
                className="w-full max-w-120"
                src={LOGO_BANNER}
                alt="Zona Mágica"
            />

            <div className="mt-16 hover:scale-108 transition-transform duration-200">
                <ContactButton
                    label={
                        <Text className="text-[1.4rem]! sm:text-[3rem]!">
                            ¡Cotizar ahora!
                        </Text>
                    }
                    wsIcon={<IconBrandWhatsapp size={32} />}
                />
            </div>
        </Stack>
    );
}
