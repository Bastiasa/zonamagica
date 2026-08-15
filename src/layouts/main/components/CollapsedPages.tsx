"use client";

import {
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    Flex,
    Stack,
} from "@mantine/core";
import { HamburgerIcon, MenuIcon } from "lucide-react";
import { HeaderPages } from "./HeaderPages";
import { useDisclosure } from "@mantine/hooks";

import classes from "./HeaderCollapsablePages.module.css";

export const CollapsedPages = () => {
    const [isOpened, { close, open }] =
        useDisclosure(false);

    return (
        <>
            <Flex
                align={"center"}
                ml={"auto"}
                className={
                    classes["collapsed-pages-trigger"]
                }
            >
                <Button
                    onClick={open}
                    variant="transparent"
                >
                    <MenuIcon />
                </Button>
            </Flex>

            <Drawer
                position="right"
                opened={isOpened}
                onClose={close}
            >
                <DrawerBody>
                    <Stack>
                        <HeaderPages onAnyClicked={close} />
                    </Stack>
                </DrawerBody>
            </Drawer>
        </>
    );
};
