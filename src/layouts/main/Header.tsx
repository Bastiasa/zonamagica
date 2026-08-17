"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
    Anchor,
    Box,
    Burger,
    Container,
    Divider,
    Drawer,
    Group,
    Stack,
    Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
    IconBrandWhatsapp,
    IconSparkles,
} from "@tabler/icons-react";
import { Logo } from "./Logo";
import { CONTACT } from "../../data/contact";
import { HEADER_PAGES } from "../../data/headerPages";
import { ContactButton } from "@/src/components/ContactButton";
import Link from "next/link";
import { useScrollRestoration } from "@/src/hooks/useScrollRestoration";

export default function MainLayoutHeader() {
    const pathname = usePathname();
    const [opened, { open, close }] = useDisclosure(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () =>
            setIsScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, {
            passive: true,
        });
        return () =>
            window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className="sticky top-0 z-50">
            <div
                className={`bg-white/95 backdrop-blur transition-shadow ${
                    isScrolled
                        ? "shadow-[0_4px_16px_rgba(59,11,99,0.08)]"
                        : "shadow-none"
                }`}
            >
                <Container size="lg">
                    <Group
                        justify="space-between"
                        align="center"
                        className="py-3"
                        wrap="nowrap"
                    >
                        <Logo
                            variant="full"
                            size={44}
                            className="hidden sm:inline-flex"
                        />
                        <Logo
                            variant="icon"
                            size={38}
                            withWordmark
                            className="inline-flex sm:hidden"
                        />

                        <Group gap={28} visibleFrom="md">
                            {HEADER_PAGES.map(
                                ([href, title]) => {
                                    const link = {
                                        href,
                                        label: title,
                                    };
                                    const active =
                                        pathname ===
                                        link.href;
                                    return (
                                        <Anchor
                                            key={link.href}
                                            href={link.href}
                                            underline="never"
                                            fw={700}
                                            className={`text-sm transition-colors ${
                                                active
                                                    ? "text-[#EC1FA0]"
                                                    : "text-[#3B0B63]/80 hover:text-[#EC1FA0]"
                                            }`}
                                        >
                                            {link.label}
                                        </Anchor>
                                    );
                                },
                            )}
                        </Group>

                        <Group gap="sm" wrap="nowrap">
                            <Box
                                visibleFrom="sm"
                                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-extrabold text-white transition-colors"
                            >
                                <ContactButton
                                    label={
                                        <p>Cotiza aquí</p>
                                    }
                                />
                            </Box>

                            <Burger
                                opened={opened}
                                onClick={open}
                                hiddenFrom="md"
                                color="#3B0B63"
                                aria-label="Abrir menú"
                            />
                        </Group>
                    </Group>
                </Container>
            </div>

            <Drawer
                opened={opened}
                onClose={close}
                position="right"
                size="85%"
                padding="lg"
                title={
                    <Text
                        fw={800}
                        className="text-[#FFC72C]"
                    >
                        Zona{" "}
                        <span className="text-white">
                            Mágica
                        </span>
                    </Text>
                }
                overlayProps={{
                    backgroundOpacity: 0.6,
                    blur: 2,
                }}
                styles={{
                    content: { backgroundColor: "#3B0B63" },
                    header: { backgroundColor: "#3B0B63" },
                    close: { color: "white" },
                }}
            >
                <Stack
                    gap="lg"
                    mt="sm"
                    className="relative"
                >
                    <IconSparkles
                        size={22}
                        className="absolute -top-2 right-2 text-[#2FE0E6]/50"
                        aria-hidden="true"
                    />

                    {HEADER_PAGES.map(([href, label]) => {
                        const link = {
                            href,
                            label,
                        };
                        const active =
                            pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={close}
                                className={`text-lg font-bold ${active ? "text-[#FFC72C]" : "text-white/90 hover:text-[#FFC72C]"}`}
                            >
                                <Text>{link.label}</Text>
                            </Link>
                        );
                    })}

                    <Divider color="rgba(255,255,255,0.15)" />

                    <div
                        rel="noopener noreferrer"
                        onClick={close}
                        className="inline-flex items-center justify-start gap-2 rounded-full px-5 py-3 text-sm font-extrabold text-[#3B0B63]"
                    >
                        <ContactButton
                            label={<p>Cotiza aquí</p>}
                        />
                    </div>
                </Stack>
            </Drawer>
        </header>
    );
}
