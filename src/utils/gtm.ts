type GA4Item = {
    item_id?: string,
    item_name?: string;
    item_category?: string;
    price?: number;
}

class GtmManager {
    private get dataLayer() {
        return window.dataLayer ?? [];
    }

    private addEvent(eventData: {
        event: string;
        [x: string]: any;
    }) {
        this.dataLayer.push(eventData);
    }

    serviceLinkCopied(properties: {
        service: EnterpriseServiceData;
    }) {
        this.addEvent({
            event: "service_link_copied",
            serviceLinkCopiedData: {
                ...properties,
            },
        });
    }

    serviceShare(properties: {
        service: EnterpriseServiceData;
    }) {
        this.addEvent({
            event: "service_share",
            serviceShareData: {
                ...properties,
            },
        });
    }

    socialMediaClicked(properties: {
        social_media:
        | "Instagram"
        | "Facebook"
        | "TikTok"
        | "Whatsapp"
        | string;
    }) {
        this.addEvent({
            event: "open_social_media",
            openSocialMediaData: {
                ...properties,
            },
        });
    }

    whatsappButtonClicked(properties: {
        location?:
        | "hero"
        | "unknown"
        | "service"
        | "build_your_plan"
        | "header"
        | "header_drawer";
        service?: EnterpriseServiceData;
        byp_checked_items?: GA4Item[];
    }) {
        this.addEvent({
            event: "whatsapp_click",
            whatsappClickData: {
                location: "unknown",
                ...properties,
            },
        });
    }

    bypItemSet(properties: {
        item_name: string;
        value: boolean;
    }) {
        this.addEvent({
            event: "build_your_plan_item_set",
            bypItemSetData: {
                ...properties,
            },
        });
    }
}

export const gtmManager = new GtmManager();
