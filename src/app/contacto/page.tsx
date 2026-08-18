import { CenteredSection } from "@/src/components/CenteredSection";
import { ContactButton } from "@/src/components/ContactButton";
import { SOCIALS } from "@/src/data/socials";
import { APP_THEME } from "@/src/data/theme";
import {
    Anchor,
    AppShellSection,
    Group,
    Stack,
    Text,
    Title,
} from "@mantine/core";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Zona Mágica | Contáctanos",
};

export default function ContactPageHandler() {
    return (
        <>
            <CenteredSection>
                <Stack py={64} gap={"xl"}>
                    <Title>Cómo contactarnos</Title>
                    <ContactButton
                        label={"Contáctanos por WhatsApp"}
                    ></ContactButton>

                    <Title order={2}>Otras opciones</Title>

                    <Text>Llámanos a estos números</Text>
                    <Anchor href="tel:+573043498228">
                        304 349 8228
                    </Anchor>

                    <Anchor href="tel:+576045969779">
                        (604) 596 9779
                    </Anchor>

                    <Text>Escríbenos un correo</Text>

                    <Anchor href="mailto:zmeventosyrecreacion@gmail.com">
                        zmeventosyrecreacion@gmail.com
                    </Anchor>

                    <Text>
                        Aquí tienes nuestras redes sociales
                    </Text>

                    <Group>
                        {SOCIALS.map((social, i) => (
                            <a href={social.href} key={i}>
                                <social.icon
                                    color={
                                        APP_THEME.colors!
                                            .magic![6]
                                    }
                                    size={48}
                                ></social.icon>
                            </a>
                        ))}
                    </Group>
                </Stack>
            </CenteredSection>
        </>
    );
}
