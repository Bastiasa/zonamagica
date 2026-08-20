import {
    Grid,
    GridCol,
    Group,
    Stack,
    Text,
    Title,
} from "@mantine/core";
import Script from "next/script";
import { CenteredSection } from "../CenteredSection";

import Image from "next/image";
import COVER_IMAGE from "../../assets/homepage/cover.webp";
import InstagramVideo from "./InstagramVideo";

export function VideoSection() {
    return (
        <>
            <Script
                async
                src="//www.instagram.com/embed.js"
            />

            <CenteredSection>
                <Grid gap={20}>
                    <GridCol
                        span={{
                            sm: 8,
                            xs: 12,
                        }}
                    >
                        <Stack>
                            <Title>Bienvenido</Title>

                            <Text>
                                Somos{" "}
                                <strong>Zona Mágica</strong>
                                , una empresa de recreación.
                            </Text>

                            <Text>
                                Tenemos un largo trayecto en
                                eventos, puedes revisar en
                                nuestras redes sociales.
                            </Text>

                            <Image
                                className="mx-auto w-full h-auto sm:w-full sm:h-[710px] object-cover"
                                alt="Zona Mágica y sus servicios"
                                src={COVER_IMAGE}
                            />
                        </Stack>
                    </GridCol>

                    <GridCol
                        span={{
                            sm: 12 - 8,
                            xs: 12,
                        }}
                    >
                        <Group justify="center">
                            <InstagramVideo />
                        </Group>
                    </GridCol>
                </Grid>
            </CenteredSection>
        </>
    );
}
