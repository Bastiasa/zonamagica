import { Button, Stack, Title } from "@mantine/core";
import { PartyPopper } from "lucide-react";
import Link from "next/link";

export default function NotFoundPage() {
    return (
        <Stack align="center" pt={220} pb={320}>
            <PartyPopper size={128}></PartyPopper>

            <Title>Error 404</Title>
            <div>
                No se ha podido encontrar este sitio web
            </div>

            <Link href={"/"}>
                <Button>Volver al inicio</Button>
            </Link>
        </Stack>
    );
}
