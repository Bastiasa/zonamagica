import { withBasePath } from "../utils/withBasepath";

const MINIMAL_ATTRIBUTES = [
    "Pintucaritas",
    "Show de títeres",
    "Show de payasos",
];

export const ENTERPRISE_DEFINED_SERVICES_CATEGORIES = [
    {
        slug: "fiestas-y-recreacion",
        label: "Fiestas y recreación",
    },
    {
        slug: "bebes",
        label: "Bebés y Chiquitos",
    },
] as const;

export const ENTERPRISE_DEFINED_SERVICES: EnterpriseServiceData<
    typeof ENTERPRISE_DEFINED_SERVICES_CATEGORIES
>[] = [
    {
        category: "fiestas-y-recreacion",
        slug: "chispa-magica",
        name: "Chispa Mágica",
        price: 160_000,
        hours: 4,
        workers: 1,
        attributes: [
            "Pintucaritas",
            "Recreación dirigida",
            "Show de payasos",
            "Globoflexia",
            "Kit de Hora loca",
        ],
        image: withBasePath(
            "/images/services/Planes_Chispa Mágica.png",
        ),
    },

    {
        category: "fiestas-y-recreacion",
        name: "Fiesta Total",
        slug: "fiesta-total",
        price: 220_000,
        hours: 4,
        workers: 2,
        attributes: [
            "Pintucaritas",
            "Recreación dirigida",
            "Show de payasos",
            "Show de títeres",
            "Globoflexia",
            "Kit de Hora loca",
        ],
        image: withBasePath(
            "/images/services/Planes_Fiesta Total.png",
        ),
    },

    {
        category: "fiestas-y-recreacion",
        name: "Splash Fest",
        slug: "splash-fest",
        price: 380_000,
        hours: 4,
        workers: 2,
        attributes: [
            "Pistolas de agua",
            "Flotadores",
            "Equipo de Sonido",
            "Hula Hula",
            "Kit de Hora Loca",
        ],
        image: withBasePath(
            "/images/services/Planes_Splash Fest.png",
        ),
    },

    {
        category: "bebes",
        name: "Dulce Espera",
        slug: "dulce-espera",
        price: 310_000,
        hours: 4,
        workers: 1,
        attributes: [
            "Recreación de Adultos",
            "Concurso de Regalos",
            "Equipo de Sonido",
            "Regalo a los Padres (Cortesía de Zona Mágica)",
        ],
        image: withBasePath(
            "/images/services/Planes_Dulce Espera.png",
        ),
    },

    {
        category: "bebes",
        name: "Mini Exploradores",
        slug: "mini-exploradores",
        price: 360_000,
        hours: 4,
        workers: 1,
        attributes: [
            "Baby Zone",
            "Manualidades",
            "Show de Títeres",
            "Recreación Dirigida",
            "Pintucaritas",
            "Kit de Hora Loca",
            "Globoflexia",
            "Equipo de Sonido",
        ],
        image: withBasePath(
            "/images/services/Planes_Mini Exploradores.png",
        ),
    },
] as const;
