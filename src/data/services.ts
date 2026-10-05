import { withBasePath } from "../utils/withBasepath";

const ATTRIBUTES = {
    FH_RECREACION: "4 horas de recreación",
    FH_DECORACION: "4 horas de decoración",

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
    TATUAJES: "Tatuajes temporales",
    LACA: "Laca de color",
    REGALO_RIFA: "Regalo para Rifar",

    MAGIA: "Show de Magia",

    EXPERIMENTOS: "Experimentos Científicos",

    RECREACION_ADULTOS: "Recreación de Adultos",
    CONCURSO_REGALOS: "Concurso de Regalos",
    REGALO_CORTESIA:
        "Regalo a los Padres (Cortesía de Zona Mágica)",

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

    {
        slug: "primera-comunion",
        label: "Primera Comunión",
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
        hours: 3,
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
        slug: "serpentina-musical",
        name: "Serpentina Musical",
        category: "fiestas-y-recreacion",
        price: 320_000,
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
            ATTRIBUTES.SONIDO_BASICO,
        ],
        image: IMAGE("Serpentina Musical.jpg"),
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
        slug: "maravilla",
        name: "Maravilla",
        category: "fiestas-y-recreacion",
        price: 420_000,
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
            ATTRIBUTES.FH_DECORACION,
            ATTRIBUTES.FH_RECREACION,
        ],
        image: IMAGE("Maravilla.jpg"),
    },

    {
        name: "Súper Fiesta",
        slug: "super-fiesta",
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
        image: IMAGE("Súper Fiesta.jpg"),
    },

    {
        name: "Universo Premium",
        slug: "universo-premium",
        category: "fiestas-y-recreacion",
        hours: 8,
        price: 520_000,
        workers: 2,
        attributes: [
            ATTRIBUTES.PINTUCARITAS,
            ATTRIBUTES.RECREACION_DIRIGIDA,
            ATTRIBUTES.SHOW_PAYASOS,
            ATTRIBUTES.SHOW_TITERES,
            ATTRIBUTES.GLOBOFLEXIA,
            ATTRIBUTES.HORA_LOCA,
            ATTRIBUTES.PERSONAJE,
            ATTRIBUTES.INFLABLE,
            ATTRIBUTES.DECORACION_SENCILLA,
            ATTRIBUTES.SONIDO_BASICO,

            "4 horas de decoración",
            "4 horas de recreación",
        ],
        image: IMAGE("Universo Premium.jpg"),
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
        name: "Magia & Ciencia Sorpresa",
        slug: "magia-y-ciencia-sorpresa",
        category: "otras",
        hours: 4,
        workers: 2,

        price: 600_000,

        attributes: [
            ATTRIBUTES.PINTUCARITAS,
            ATTRIBUTES.RECREACION_DIRIGIDA,
            ATTRIBUTES.HORA_LOCA,
            ATTRIBUTES.MAGIA,
            ATTRIBUTES.EXPERIMENTOS,
        ],

        image: IMAGE("Magia Y Ciencia Sorpresa.jpg"),
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
            ATTRIBUTES.REGALO_CORTESIA,
        ],
        image: IMAGE("Dulce Espera.jpg"),
    },

    {
        category: "otras",
        name: "Celebración de Vida",
        slug: "celebracion-de-vida",
        price: 310_000,
        hours: 4,
        workers: 2,
        attributes: [
            ATTRIBUTES.RECREACION_ADULTOS,
            ATTRIBUTES.CONCURSO_REGALOS,
            ATTRIBUTES.SONIDO_BASICO,
            ATTRIBUTES.REGALO_CORTESIA,
        ],
        image: IMAGE("Celebración de Vida.jpg"),
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

    {
        slug: "angel-guardian",
        name: "Ángel Guardián",
        category: "primera-comunion",
        price: 300_000,
        hours: 4,
        workers: 2,
        attributes: [
            ATTRIBUTES.TATUAJES,
            ATTRIBUTES.LACA,
            ATTRIBUTES.SHOW_PAYASOS,
            ATTRIBUTES.RECREACION_DIRIGIDA,
            ATTRIBUTES.GLOBOFLEXIA,
            ATTRIBUTES.HORA_LOCA,
            ATTRIBUTES.REGALO_RIFA,
        ],
        image: IMAGE("Ángel Guardián.jpg"),
    },

    {
        slug: "luz-divina",
        name: "Luz Divina",
        category: "primera-comunion",
        price: 380_000,
        hours: 4,
        workers: 2,
        attributes: [
            ATTRIBUTES.TATUAJES,
            ATTRIBUTES.LACA,
            ATTRIBUTES.SHOW_PAYASOS,
            ATTRIBUTES.RECREACION_DIRIGIDA,
            ATTRIBUTES.GLOBOFLEXIA,
            ATTRIBUTES.SONIDO_BASICO,
            ATTRIBUTES.HORA_LOCA,
            ATTRIBUTES.REGALO_RIFA,
        ],
        image: IMAGE("Luz Divina.jpg"),
    },

    {
        slug: "encuentro-sagrado",
        name: "Encuentro Sagrado",
        category: "primera-comunion",
        price: 590_000,
        hours: 4,
        workers: 2,
        attributes: [
            ATTRIBUTES.TATUAJES,
            ATTRIBUTES.LACA,
            ATTRIBUTES.SHOW_PAYASOS,
            ATTRIBUTES.RECREACION_DIRIGIDA,
            ATTRIBUTES.DECORACION_SENCILLA,
            ATTRIBUTES.SONIDO_BASICO,
            ATTRIBUTES.GLOBOFLEXIA,
            ATTRIBUTES.HORA_LOCA,
            ATTRIBUTES.REGALO_RIFA,
        ],
        image: IMAGE("Encuentro Sagrado.jpg"),
    },
] as const;
