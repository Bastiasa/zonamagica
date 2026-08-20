import { NavigationButton } from "@/src/components/NavigationButton";
import SocialMediaButton from "@/src/components/SocialMediaButton";
import { CONTACT } from "@/src/data/contact";
import { HEADER_PAGES } from "@/src/data/headerPages";
import { ENTERPRISE_DEFINED_SERVICES } from "@/src/data/services";
import { SOCIALS } from "@/src/data/socials";
import {
    Anchor,
    Container,
    Group,
    SimpleGrid,
    Stack,
    Text,
} from "@mantine/core";
import {
    IconBrandWhatsapp,
    IconClockHour4,
    IconMail,
    IconMapPin,
    IconPhone,
    IconSparkles,
} from "@tabler/icons-react";
import Link from "next/link";
import GoogleMaps from "./GoogleMaps";
import { Logo } from "./Logo";

const SERVICIOS = ENTERPRISE_DEFINED_SERVICES.map(
    ({ name, slug }) => ({
        label: name,
        href: `/planes/${slug}`,
    }),
);

const EMPRESA = HEADER_PAGES.map(([href, title]) => ({
    label: title,
    href,
}));

/** Scalloped "stage curtain" divider — the footer's signature detail. */
function CurtainEdge({
    color,
    flip = false,
}: {
    color: string;
    flip?: boolean;
}) {
    return (
        <svg
            viewBox="0 0 1200 32"
            preserveAspectRatio="none"
            className={`block h-4 w-full sm:h-6 ${flip ? "rotate-180" : ""}`}
            aria-hidden="true"
        >
            <defs>
                <pattern
                    id="curtainScallop"
                    width="40"
                    height="32"
                    patternUnits="userSpaceOnUse"
                >
                    <path
                        d="M0,0 Q20,32 40,0 Z"
                        fill={color}
                    />
                </pattern>
            </defs>
            <rect
                width="1200"
                height="32"
                fill="url(#curtainScallop)"
            />
        </svg>
    );
}

export default function MainLayoutFooter() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative">
            {/* CTA band */}
            <div className="bg-[#EC1FA0]">
                <Container size="lg" className="py-7">
                    <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
                        <div>
                            <Text
                                fw={800}
                                className="text-white text-lg sm:text-xl tracking-tight"
                            >
                                ¿Ya tienes fecha para la
                                fiesta?
                            </Text>
                            <Text className="text-white/90 text-sm sm:text-base">
                                Cuéntanos qué celebras y
                                armamos la magia contigo.
                            </Text>
                        </div>
                        <Link
                            href={CONTACT.whatsappHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#FFC72C] px-6 py-3 text-sm font-extrabold text-[#3B0B63]! transition-transform hover:scale-105"
                        >
                            <Group>
                                <IconBrandWhatsapp
                                    size={20}
                                    stroke={2}
                                />
                                Escríbenos por WhatsApp
                            </Group>
                        </Link>
                    </div>
                </Container>
            </div>

            {/* Main footer */}
            <div className="relative overflow-hidden bg-[#3B0B63]">
                <IconSparkles
                    size={28}
                    className="motion-safe:animate-pulse absolute right-10 top-10 hidden text-[#FFC72C]/40 sm:block"
                    aria-hidden="true"
                />
                <IconSparkles
                    size={18}
                    className="motion-safe:animate-pulse absolute bottom-24 left-8 hidden text-[#2FE0E6]/40 sm:block"
                    aria-hidden="true"
                />

                <Container
                    size="lg"
                    className="relative py-12"
                >
                    <SimpleGrid
                        cols={{ base: 1, sm: 2, lg: 4 }}
                        spacing={40}
                    >
                        <Stack gap="sm">
                            <Logo
                                variant="icon"
                                size={52}
                                withWordmark
                                href="/"
                            />
                            <Text className="text-white/70 text-sm leading-relaxed">
                                Magia, risas y diversión
                                para la fiesta de tus
                                sueños. Shows de magia y
                                recreación infantil en cada
                                celebración.
                            </Text>
                            <Group gap="xs" mt={4}>
                                {SOCIALS.map((_, i) => (
                                    <SocialMediaButton
                                        key={i}
                                        socialMediaIndex={i}
                                    />
                                ))}
                            </Group>
                        </Stack>

                        <Stack gap="xs">
                            <Text
                                fw={800}
                                className="text-[#FFC72C] text-sm uppercase tracking-wide"
                            >
                                Planes
                            </Text>
                            {SERVICIOS.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-white/75 text-sm transition-colors hover:text-white"
                                >
                                    <Text>
                                        {item.label}
                                    </Text>
                                </Link>
                            ))}
                        </Stack>

                        <Stack gap="xs">
                            <Text
                                fw={800}
                                className="text-[#FFC72C] text-sm uppercase tracking-wide"
                            >
                                Empresa
                            </Text>
                            {EMPRESA.map((item) => (
                                <NavigationButton
                                    variant="transparent"
                                    key={item.href}
                                    to={item.href}
                                    className="w-auto! text-white/75! text-sm transition-colors hover:text-white!"
                                >
                                    {item.label}
                                </NavigationButton>
                            ))}
                        </Stack>

                        <Stack gap="xs">
                            <Text
                                fw={800}
                                className="text-[#FFC72C] text-sm uppercase tracking-wide"
                            >
                                Contacto
                            </Text>
                            <Group
                                gap="xs"
                                wrap="nowrap"
                                align="center"
                            >
                                <IconPhone
                                    size={24}
                                    className="mt-0.5 shrink-0 text-[#2FE0E6]"
                                />
                                <Anchor
                                    href={
                                        CONTACT.whatsappHref
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    underline="never"
                                    className="text-white/75 text-sm hover:text-white"
                                >
                                    {CONTACT.whatsapp}
                                </Anchor>
                            </Group>
                            <Group
                                gap="xs"
                                wrap="nowrap"
                                align="center"
                            >
                                <IconMail
                                    size={24}
                                    className="mt-0.5 shrink-0 text-[#2FE0E6]"
                                />
                                <Anchor
                                    href={`mailto:${CONTACT.email}`}
                                    underline="never"
                                    className="text-white/75 break-all text-sm hover:text-white"
                                >
                                    {CONTACT.email}
                                </Anchor>
                            </Group>

                            <Group
                                gap="xs"
                                wrap="nowrap"
                                align="center"
                            >
                                <IconClockHour4
                                    size={24}
                                    className="mt-0.5 shrink-0 text-[#2FE0E6]"
                                />
                                <Text className="text-white/75 text-sm">
                                    {CONTACT.hours}
                                </Text>
                            </Group>
                            <Group
                                gap="xs"
                                wrap="nowrap"
                                align="center"
                            >
                                <IconMapPin
                                    size={24}
                                    className="mt-0.5 shrink-0 text-[#2FE0E6]"
                                />
                                <Text className="text-white/75 text-sm">
                                    {CONTACT.address}
                                </Text>
                            </Group>

                            <GoogleMaps />
                        </Stack>
                    </SimpleGrid>

                    <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
                        <Text className="text-white/50 text-xs">
                            © {year} Zona Mágica. Todos los
                            derechos reservados.
                        </Text>
                        <Group gap="lg">
                            {/* <Anchor
                                href="/privacidad"
                                underline="never"
                                className="text-white/50 text-xs hover:text-white"
                            >
                                Política de privacidad
                            </Anchor>
                            <Anchor
                                href="/terminos"
                                underline="never"
                                className="text-white/50 text-xs hover:text-white"
                            >
                                Términos y condiciones
                            </Anchor> */}
                        </Group>
                    </div>
                </Container>
            </div>
        </footer>
    );
}
