import {
    Grid,
    GridCol,
    Group,
    Stack,
    Text,
    Title,
} from "@mantine/core";
import { CenteredSection } from "../CenteredSection";
import Script from "next/script";

import COVER_IMAGE from "../../assets/homepage/cover.webp";
import Image from "next/image";

export function VideoSection() {
    return (
        <>
            <Script
                async
                src="//www.instagram.com/embed.js"
            />

            <CenteredSection>
                <Grid>
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
                                className="mx-auto w-full h-auto sm:w-full sm:h-[450px] object-cover"
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
                            <blockquote
                                className="instagram-media"
                                data-instgrm-permalink="https://www.instagram.com/reel/DUl9CSBj15C/?utm_source=ig_embed&amp;utm_campaign=loading"
                                data-instgrm-version="14"
                            />
                        </Group>
                    </GridCol>
                </Grid>
            </CenteredSection>
        </>
    );
}
