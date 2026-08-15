import { withBasePath } from "../utils/withBasepath";

export const HEADER_PAGES: [href: string, title: string][] =
    [
        [withBasePath("/"), "Inicio"],
        [withBasePath("/sobre-nosotros"), "Sobre nosotros"],
        //["/resenas", "Reseñas"],
        [withBasePath("/contacto"), "Contacto"],
    ] as const;
