import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandTiktok,
    IconBrandWhatsapp,
} from "@tabler/icons-react";
import { CONTACT } from "./contact";

export const SOCIALS = [
    {
        label: "Instagram",
        href: "https://www.instagram.com/zonamagica.medellin/",
        icon: IconBrandInstagram,
    },
    {
        label: "Facebook",
        href: "https://www.facebook.com/zonamagicaeventosyrecreacion",
        icon: IconBrandFacebook,
    },
    {
        label: "TikTok",
        href: "https://www.tiktok.com/@zonamagicamedellin",
        icon: IconBrandTiktok,
    },
    {
        label: "WhatsApp",
        href: CONTACT.whatsappHref,
        icon: IconBrandWhatsapp,
    },
];
