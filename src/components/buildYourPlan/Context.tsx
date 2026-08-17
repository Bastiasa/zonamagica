"use client";
import { createContext, useContext } from "react";
import useByp from "./hooks/useByp";

type BypContextType = ReturnType<typeof useByp>;

const BypContext = createContext<
    BypContextType | undefined
>(undefined);

export function BypProvider({
    children,
}: {
    children?: any;
}) {
    const context = useByp();

    return (
        <BypContext.Provider value={context}>
            {children}
        </BypContext.Provider>
    );
}

export function useBypContext() {
    return useContext(BypContext) as BypContextType;
}
