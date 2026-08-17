"use client";

import {
    Button,
    Group,
    Paper,
    Stack,
    Text,
    Title,
} from "@mantine/core";

import {
    ConsentPreferences,
    getStoredConsent,
    saveConsent,
} from "./ConsentManager";
import { useEffect, useState } from "react";

export default function CookieBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = getStoredConsent();

        setVisible(!consent);
    }, []);

    if (!visible) {
        return null;
    }

    const acceptAll = () => {
        const preferences: ConsentPreferences = {
            analytics: true,
            marketing: true,
        };

        saveConsent(preferences);
        setVisible(false);
    };

    const rejectAll = () => {
        const preferences: ConsentPreferences = {
            analytics: false,
            marketing: false,
        };

        saveConsent(preferences);
        setVisible(false);
    };

    return (
        <Paper
            shadow="lg"
            radius="lg"
            p="lg"
            withBorder
            pos="fixed"
            bottom={20}
            left={0}
            right={0}
            w={"100%"}
            maw={"min(calc(100% - 40px), 800px)"}
            mx={"auto"}
            className="box-border"
            style={{
                zIndex: 9999,
            }}
        >
            <Stack gap="sm">
                <Title order={3}>
                    Tu privacidad importa
                </Title>

                <Text size="sm">
                    Utilizamos cookies y tecnologías
                    similares para analizar el uso del sitio
                    y mejorar tu experiencia.
                </Text>

                <Group>
                    <Button onClick={acceptAll}>
                        Aceptar todas
                    </Button>

                    <Button
                        variant="default"
                        onClick={rejectAll}
                    >
                        Rechazar
                    </Button>
                </Group>
            </Stack>
        </Paper>
    );
}
