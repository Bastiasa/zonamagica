import Image from "next/image";

import { Stack, Text, Title } from "@mantine/core";

import HERO_BACKGROUND from "@/src/assets/homepage/hero.jpeg";
import LOGO_BANNER from "@/src/assets/logo_banner.webp";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { ContactButton } from "../ContactButton";

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
            <div className="absolute opacity-[.4] -z-1 bg-black inset-0"></div>

            <Image
                className="w-full max-w-120"
                src={LOGO_BANNER}
                alt="Zona Mágica"
            />

            <Title order={1} c={"white"} ta={"center"}>
                ¡Diversión sin límites!
            </Title>

            <div className="mt-16 bg-blue-200 rounded-full p-2 hover:scale-108 transition-transform duration-200">
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
