import { withBasePath } from "../utils/withBasepath";

const IMAGE = (name: string) => {
    return withBasePath(`/images/plans/${name}`);
};

export const ENTERPRISE_DEFINED_SERVICES_CATEGORIES = [
    {
        slug: "fiestas-y-recreacion",
        label: "Fiestas y recreación",
    },
    {
        slug: "eventos-tematicos",
        label: "Eventos temáticos",
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
        image: IMAGE("Chispa Mágica.jpg"),
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
        image: IMAGE("Fiesta Total.jpg"),
    },

    {
        name: "Mundo Sorpresa",
        slug: "mundo-sorpresa",
        category: "fiestas-y-recreacion",
        price: 260_000,
        hours: 4,
        workers: 2,
        attributes: [
            "Pintucaritas",
            "Recreación dirigida",
            "Show de payasos",
            "Show de títeres",
            "Globoflexia",
            "Kit de Hora Loca",
            "Personaje de tu Elección",
        ],
        image: IMAGE("Mundo Sorpresa.jpg"),
    },

    {
        name: "Súper Rumba",
        slug: "super-rumba",
        category: "fiestas-y-recreacion",
        price: 280_000,
        hours: 4,
        workers: 2,
        attributes: [
            "Pintucaritas",
            "Recreación dirigida",
            "Show de payasos",
            "Show de títeres",
            "Globoflexia",
            "Kit de Hora Loca",
            "Equipo de Sonido",
        ],
        image: IMAGE("Súper Rumba.jpg"),
    },

    {
        name: "Aventura Inflable",
        slug: "aventura-inflable",
        category: "fiestas-y-recreacion",
        price: 370_000,
        hours: 4,
        workers: 2,
        attributes: [
            "Pintucaritas",
            "Recreación dirigida",
            "Show de payasos",
            "Show de títeres",
            "Globoflexia",
            "Kit de Hora Loca",
            "Inflable",
        ],
        image: IMAGE("Aventura Inflable.jpg"),
    },

    {
        name: "Magia Fantástica",
        slug: "magia-fantastica",
        category: "fiestas-y-recreacion",
        price: 410_000,
        hours: 4,
        workers: 2,
        attributes: [
            "Pintucaritas",
            "Recreación dirigida",
            "Show de payasos",
            "Show de títeres",
            "Globoflexia",
            "Kit de Hora Loca",
            "Inflable",
            "Personaje de tu Elección",
        ],
        image: IMAGE("Magia Fantástica.jpg"),
    },

    {
        name: "Mega Fiesta VIP",
        slug: "mega-fiesta-vip",
        category: "fiestas-y-recreacion",
        price: 470_000,
        hours: 4,
        workers: 2,
        attributes: [
            "Pintucaritas",
            "Recreación dirigida",
            "Show de payasos",
            "Show de títeres",
            "Globoflexia",
            "Kit de Hora Loca",
            "Inflable",
            "Personaje de tu Elección",
            "Equipo de Sonido",
        ],
        image: IMAGE("Mega Fiesta VIP.jpg"),
    },

    {
        category: "eventos-tematicos",
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
        image: IMAGE("Splash Fest.jpg"),
    },

    {
        category: "eventos-tematicos",
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
        image: IMAGE("Dulce Espera.jpg"),
    },

    {
        category: "eventos-tematicos",
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
        image: IMAGE("Mini Exploradores.jpg"),
    },
] as const;
