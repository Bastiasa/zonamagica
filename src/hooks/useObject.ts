import { useCallback, useState } from "react";

export function useObject<T extends object>(
    initialValue: T,
) {
    const [value, setValue] = useState<T>(initialValue);

    const update = useCallback((partial: Partial<T>) => {
        setValue((current) => ({
            ...current,
            ...partial,
        }));
    }, []);

    return [value, update, setValue] as const;
}
