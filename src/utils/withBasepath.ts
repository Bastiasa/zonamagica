// src/utils/path.ts

export const BASE_PATH = "";

export function withBasePath(path: string) {
    if (!path.startsWith("/")) {
        path = `/${path}`;
    }

    return `${BASE_PATH}${path}`;
}
