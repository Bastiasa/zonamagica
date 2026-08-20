"use client";

import { SOCIALS } from "../data/socials";
import { gtmManager } from "../utils/gtm";
import { NavigationButton } from "./NavigationButton";

export default ({
    socialMediaIndex,
}: {
    socialMediaIndex: number;
}) => {
    const {
        href,
        icon: Icon,
        label,
    } = SOCIALS[socialMediaIndex];

    return (
        <NavigationButton
            onClick={gtmManager.socialMediaClicked.bind(
                gtmManager,
                {
                    social_media: label,
                },
            )}
            key={label}
            to={href}
            variant="transparent"
            aria-label={label}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#FFC72C] hover:text-[#3B0B63]"
        >
            <Icon size={32} stroke={1.8} />
        </NavigationButton>
    );
};
