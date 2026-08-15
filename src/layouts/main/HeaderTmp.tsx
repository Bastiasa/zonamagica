import {
    Anchor,
    AppShellSection,
    Container,
    Flex,
} from "@mantine/core";
import Image from "next/image";

import LOGO_BANNER from "../../assets/logo_banner.png";
import { HeaderCollapsablePages } from "./components/HeaderCollapsablePages";
import Link from "next/link";

export default function MainLayoutHeader() {
    return (
        <AppShellSection>
            <div className="w-full border-b border-b-black px-12 py-8">
                <Flex mx={"auto"} w={"100%"} maw={800}>
                    <Link href={"/"}>
                        <Image
                            height={72}
                            src={LOGO_BANNER}
                            alt="Zona Mágica, Logo"
                        />
                    </Link>

                    <HeaderCollapsablePages />
                </Flex>
            </div>
        </AppShellSection>
    );
}
