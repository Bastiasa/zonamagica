import { withBasePath } from "../utils/withBasepath";

const ATTRIBUTES = {
    PINTUCARITAS: "Pintucaritas",
    RECREACION_DIRIGIDA: "Recreación dirigida",
    SHOW_PAYASOS: "Show de Payasos",
    SHOW_TITERES: "Show de Títeres",
    GLOBOFLEXIA: "Globoflexia",
    HORA_LOCA: "Kit de Hora Loca",
    PERSONAJE: "Personaje de tu Elección",
    SONIDO_BASICO: "Equipo de Sonido Básico",
    SONIDO_PROFESIONAL: "Equipo de Sonido Profesional",
    DECORACION_SENCILLA: "Decoración Sencilla",
    INFLABLE: "Inflable",

    RECREACION_ADULTOS: "Recreación de Adultos",
    CONCURSO_REGALOS: "Concurso de Regalos",

    BABY_ZONE: "Baby Zone",
    MANUALIDADES: "Manualidades",

    PISCINA_PISTOLAS_AGUA: "Pistolas de Agua",
    PISCINA_FLOTADORES: "Flotadores",
    PISCINA_HULAHULA: "Hula Hula",
};

const IMAGE = (name: string) => {
    return withBasePath(`/images/plans/${name}`);
};

export const ENTERPRISE_DEFINED_SERVICES_CATEGORIES = [
    {
        slug: "fiestas-y-recreacion",
        label: "Fiestas y recreación",
    },
    {
        slug: "otras",
        label: "Otras opciones de fiestas",
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
            ATTRIBUTES.PINTUCARITAS,
            ATTRIBUTES.RECREACION_DIRIGIDA,
            ATTRIBUTES.SHOW_PAYASOS,
            ATTRIBUTES.GLOBOFLEXIA,
            ATTRIBUTES.HORA_LOCA,
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
            ATTRIBUTES.PINTUCARITAS,
            ATTRIBUTES.RECREACION_DIRIGIDA,
            ATTRIBUTES.SHOW_PAYASOS,
            ATTRIBUTES.SHOW_TITERES,
            ATTRIBUTES.GLOBOFLEXIA,
            ATTRIBUTES.HORA_LOCA,
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
            ATTRIBUTES.PINTUCARITAS,
            ATTRIBUTES.RECREACION_DIRIGIDA,
            ATTRIBUTES.SHOW_PAYASOS,
            ATTRIBUTES.SHOW_TITERES,
            ATTRIBUTES.GLOBOFLEXIA,
            ATTRIBUTES.HORA_LOCA,
            ATTRIBUTES.PERSONAJE,
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
            ATTRIBUTES.PINTUCARITAS,
            ATTRIBUTES.RECREACION_DIRIGIDA,
            ATTRIBUTES.SHOW_PAYASOS,
            ATTRIBUTES.SHOW_TITERES,
            ATTRIBUTES.GLOBOFLEXIA,
            ATTRIBUTES.HORA_LOCA,
            ATTRIBUTES.SONIDO_BASICO,
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
            ATTRIBUTES.PINTUCARITAS,
            ATTRIBUTES.RECREACION_DIRIGIDA,
            ATTRIBUTES.SHOW_PAYASOS,
            ATTRIBUTES.SHOW_TITERES,
            ATTRIBUTES.GLOBOFLEXIA,
            ATTRIBUTES.HORA_LOCA,
            ATTRIBUTES.INFLABLE,
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
            ATTRIBUTES.PINTUCARITAS,
            ATTRIBUTES.RECREACION_DIRIGIDA,
            ATTRIBUTES.SHOW_PAYASOS,
            ATTRIBUTES.SHOW_TITERES,
            ATTRIBUTES.GLOBOFLEXIA,
            ATTRIBUTES.HORA_LOCA,
            ATTRIBUTES.INFLABLE,
            ATTRIBUTES.PERSONAJE,
        ],
        image: IMAGE("Magia Fantástica.jpg"),
    },

    {
        name: "Mega Fiesta VIP",
        slug: "mega-fiesta-vip",
        category: "fiestas-y-recreacion",
        price: 470_000,
        hours: 8,
        workers: 2,
        attributes: [
            ATTRIBUTES.PINTUCARITAS,
            ATTRIBUTES.RECREACION_DIRIGIDA,
            ATTRIBUTES.SHOW_PAYASOS,
            ATTRIBUTES.SHOW_TITERES,
            ATTRIBUTES.GLOBOFLEXIA,
            ATTRIBUTES.HORA_LOCA,
            ATTRIBUTES.PERSONAJE,
            ATTRIBUTES.DECORACION_SENCILLA,
            ATTRIBUTES.SONIDO_BASICO,

            "4 horas de decoración",
            "4 horas de recreación",
        ],
        image: IMAGE("Mega Fiesta VIP.jpg"),
    },

    {
        category: "otras",
        name: "Splash Fest",
        slug: "splash-fest",
        price: 380_000,
        hours: 4,
        workers: 2,
        attributes: [
            ATTRIBUTES.RECREACION_DIRIGIDA,
            ATTRIBUTES.PISCINA_PISTOLAS_AGUA,
            ATTRIBUTES.PISCINA_FLOTADORES,
            ATTRIBUTES.PISCINA_HULAHULA,
            ATTRIBUTES.SONIDO_BASICO,
            ATTRIBUTES.HORA_LOCA,
        ],
        image: IMAGE("Splash Fest.jpg"),
    },

    {
        category: "otras",
        name: "Dulce Espera",
        slug: "dulce-espera",
        price: 360_000,
        hours: 4,
        workers: 2,
        attributes: [
            ATTRIBUTES.RECREACION_ADULTOS,
            ATTRIBUTES.CONCURSO_REGALOS,
            ATTRIBUTES.SONIDO_BASICO,
            "Regalo a los Padres (Cortesía de Zona Mágica)",
        ],
        image: IMAGE("Dulce Espera.jpg"),
    },

    {
        category: "otras",
        name: "Mini Exploradores",
        slug: "mini-exploradores",
        price: 360_000,
        hours: 4,
        workers: 2,
        attributes: [
            ATTRIBUTES.PINTUCARITAS,
            ATTRIBUTES.RECREACION_DIRIGIDA,
            ATTRIBUTES.BABY_ZONE,
            ATTRIBUTES.MANUALIDADES,
            ATTRIBUTES.SHOW_TITERES,
            ATTRIBUTES.HORA_LOCA,
            ATTRIBUTES.GLOBOFLEXIA,
            ATTRIBUTES.SONIDO_BASICO,
        ],
        image: IMAGE("Mini Exploradores.jpg"),
    },
] as const;
