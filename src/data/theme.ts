import {
    createTheme,
    MantineColorsTuple,
    MantineThemeOverride,
} from "@mantine/core";

const magic: MantineColorsTuple = [
    "#fff0fb",
    "#ffd9f5",
    "#ffb2e9",
    "#ff80db",
    "#ff4dcc",
    "#ff1fbd",
    "#f500ad",
    "#d90098",
    "#b80082",
    "#96006d",
];

const purple: MantineColorsTuple = [
    "#f1edff",
    "#ddd6ff",
    "#c0b4ff",
    "#9d8aff",
    "#7d60ff",
    "#673cff",
    "#5b18ff",
    "#4a00e8",
    "#3b00b8",
    "#2c008a",
];

const cyan: MantineColorsTuple = [
    "#e8ffff",
    "#c8fcff",
    "#96f8fc",
    "#5ff1f4",
    "#2ce8ed",
    "#0edce5",
    "#00d1dc",
    "#00b8c4",
    "#0099a5",
    "#007c87",
];

const yellow: MantineColorsTuple = [
    "#fffde0",
    "#fff9ad",
    "#fff477",
    "#ffed3d",
    "#ffe600",
    "#ffd900",
    "#ffc800",
    "#e8ae00",
    "#c99100",
    "#a77600",
];

const pink: MantineColorsTuple = [
    "#fff0f5",
    "#ffd9e5",
    "#ffb3c8",
    "#ff89aa",
    "#ff638e",
    "#ff3d72",
    "#ff205d",
    "#e9004c",
    "#c90040",
    "#a80035",
];

export const APP_THEME = createTheme({
    primaryColor: "magic",
    primaryShade: {
        light: 6,
        dark: 5,
    },

    fontSizes: {
        xs: "clamp(1.125rem, 1.75vw, 1.5rem)",
        sm: "clamp(1.25rem, 2vw, 1.75rem)",
        md: "clamp(1.5rem, 2.5vw, 2rem)",
        lg: "clamp(1.75rem, 3vw, 2.5rem)",
        xl: "clamp(2rem, 3.5vw, 3rem)",
    },


    colors: {
        magic,
        purple,
        cyan,
        yellow,
        pink,
    },

    fontFamily:
        "Englebert, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",

    headings: {
        fontFamily:
            "Nunito, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",

        fontWeight: "900",

        sizes: {
            h1: {
                fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
                lineHeight: "0.95",
            },

            h2: {
                fontSize: "clamp(2rem, 3.25vw, 3rem)",
                lineHeight: "1",
            },

            h3: {
                fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
                lineHeight: "1.05",
            },

            h4: {
                fontSize: "clamp(1.35rem, 2vw, 1.75rem)",
                lineHeight: "1.1",
            },

            h5: {
                fontSize: "clamp(1.2rem, 1.5vw, 1.5rem)",
                lineHeight: "1.15",
            },

            h6: {
                fontSize: "clamp(1.1rem, 1.25vw, 1.25rem)",
                lineHeight: "1.2",
            },
        },
    },

    defaultRadius: "md",

    radius: {
        xs: "6px",
        sm: "8px",
        md: "10px",
        lg: "14px",
        xl: "16px",
    },

    shadows: {
        xs: "0 2px 6px rgba(91, 24, 255, 0.12)",
        sm: "0 4px 12px rgba(91, 24, 255, 0.16)",
        md: "0 8px 24px rgba(91, 24, 255, 0.20)",
        lg: "0 14px 40px rgba(91, 24, 255, 0.24)",
        xl: "0 20px 60px rgba(91, 24, 255, 0.28)",
    },

    spacing: {
        xs: "0.5rem",
        sm: "0.75rem",
        md: "1rem",
        lg: "1.6rem",
        xl: "2rem",
    },

    other: {
        magicPurple: "#5B18FF",
        magicViolet: "#7800FF",
        magicPink: "#FF1FBD",
        magicCyan: "#00DCE5",
        magicYellow: "#FFE000",
        magicRed: "#FF205D",

        magicGradient:
            "linear-gradient(135deg, #FF1FBD 0%, #7800FF 50%, #5B18FF 100%)",

        candyGradient:
            "linear-gradient(135deg, #FF1FBD 0%, #FF205D 35%, #FFE000 70%, #00DCE5 100%)",

        purpleGradient:
            "linear-gradient(135deg, #7800FF 0%, #5B18FF 50%, #00DCE5 100%)",

        yellowGradient:
            "linear-gradient(135deg, #FFE000 0%, #FF9D00 100%)",

        magicShadow:
            "0 8px 0 #3B00B8, 0 14px 30px rgba(91, 24, 255, 0.25)",

        pinkShadow:
            "0 8px 0 #B80082, 0 14px 30px rgba(255, 31, 189, 0.25)",
    },
});

export const cssVariablesResolver = (
    theme: typeof APP_THEME,
) => ({
    variables: {
        "--zm-purple": APP_THEME.other!.magicPurple,
        "--zm-violet": APP_THEME.other!.magicViolet,
        "--zm-pink": APP_THEME.other!.magicPink,
        "--zm-cyan": APP_THEME.other!.magicCyan,
        "--zm-yellow": APP_THEME.other!.magicYellow,
        "--zm-red": APP_THEME.other!.magicRed,

        "--zm-gradient-magic":
            "linear-gradient(135deg, #FF1FBD, #7800FF)",

        "--zm-gradient-candy":
            "linear-gradient(135deg, #FF1FBD, #FF205D, #FFE000, #00DCE5)",

        "--zm-gradient-purple":
            "linear-gradient(135deg, #7800FF, #5B18FF, #00DCE5)",

        "--zm-shadow-magic":
            "0 8px 0 #3B00B8, 0 14px 30px rgba(91, 24, 255, .25)",

        "--zm-shadow-pink":
            "0 8px 0 #B80082, 0 14px 30px rgba(255, 31, 189, .25)",
    },

    light: {},
    dark: {},
});
