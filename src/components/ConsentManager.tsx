"use client";

import { useEffect } from "react";

const CONSENT_KEY = "cookie-consent";

export type ConsentPreferences = {
    analytics: boolean;
    marketing: boolean;
};

declare global {
    interface Window {
        dataLayer: Record<string, unknown>[];
        gtag: (...args: unknown[]) => void;
    }
}

export function updateGoogleConsent(
    preferences: ConsentPreferences,
) {
    if (typeof window === "undefined") {
        return;
    }

    window.gtag?.("consent", "update", {
        analytics_storage: preferences.analytics
            ? "granted"
            : "denied",

        ad_storage: preferences.marketing
            ? "granted"
            : "denied",

        ad_user_data: preferences.marketing
            ? "granted"
            : "denied",

        ad_personalization: preferences.marketing
            ? "granted"
            : "denied",
    });
}

export function getStoredConsent(): ConsentPreferences | null {
    if (typeof window === "undefined") {
        return null;
    }

    const value = localStorage.getItem(CONSENT_KEY);

    if (!value) {
        return null;
    }

    try {
        return JSON.parse(value);
    } catch {
        return null;
    }
}

export function saveConsent(
    preferences: ConsentPreferences,
) {
    localStorage.setItem(
        CONSENT_KEY,
        JSON.stringify(preferences),
    );

    updateGoogleConsent(preferences);

    window.dispatchEvent(
        new CustomEvent("consent-updated"),
    );
}

export function ConsentManager() {
    useEffect(() => {
        const storedConsent = getStoredConsent();

        if (storedConsent) {
            updateGoogleConsent(storedConsent);
        }
    }, []);

    return null;
}
