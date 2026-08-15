import { Drawer, Flex } from "@mantine/core";
import { HeaderPages } from "./HeaderPages";

import classes from "./HeaderCollapsablePages.module.css";
import { DrawerTrigger } from "@base-ui/react";
import { CollapsedPages } from "./CollapsedPages";

const NonCollapsedPages = () => {
    return (
        <Flex
            className={
                classes["non-collapsed-pages-container"]
            }
            align={"center"}
            ml={"auto"}
            gap={"lg"}
        >
            <HeaderPages />
        </Flex>
    );
};

export function HeaderCollapsablePages() {
    return (
        <>
            <NonCollapsedPages />
            <CollapsedPages />
        </>
    );
}
