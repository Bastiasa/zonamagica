"use client";

import { ContactButton } from "../ContactButton";

export default ({
    serviceData,
}: {
    serviceData: EnterpriseServiceData;
}) => {
    return (
        <ContactButton
            gtmProperties={{
                location: "service",
                service: serviceData,
            }}
            label={<p>Cotizar</p>}
            wsMessage={`¡Hola!, me gustaría cotizar el plan ${serviceData.name}`}
        />
    );
};
