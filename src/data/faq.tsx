import {
    Anchor,
    List,
    ListItem,
    Stack,
    Text,
} from "@mantine/core";
import { FaqSectionItem } from "../components/faq/FaqSection";
import GoogleMaps from "../layouts/main/GoogleMaps";
import { AVAILABLE_LOCATIONS } from "./avalaibleLocations";

export const ENTERPRISE_FREQUENTLY_ASKED_QUESTIONS: FaqSectionItem[] =
    [
        {
            question: "¿En dónde están ubicados?",
            answer: (
                <Stack>
                    <Text>
                        Estamos ubicados en Envigado,
                        Antioquia. Puedes revisar nuestra{" "}
                        <Anchor href="https://maps.app.goo.gl/oyD68ymPt4KCHhNEA">
                            ubicación aquí
                        </Anchor>
                        .
                    </Text>

                    <GoogleMaps />
                </Stack>
            ),
        },

        {
            question:
                "¿En dónde tienen disponibilidad de servicio?",
            answer: (
                <Stack>
                    <Text>
                        Tenemos disponibilidad en diferentes
                        partes del Valle de Aburrá.
                    </Text>

                    <List icon="&bull;">
                        {AVAILABLE_LOCATIONS.map(
                            (location, i) => (
                                <ListItem key={i}>
                                    {location}
                                </ListItem>
                            ),
                        )}
                    </List>

                    <Text>
                        Si tu evento tiene lugar en otro
                        sitio, podemos negociar.
                    </Text>
                </Stack>
            ),
        },

        {
            question: "¿Qué contiene el kit de hora loca?",
            answer: (
                <Stack>
                    <Text>
                        El kit de hora loca contiene
                    </Text>

                    <List icon="&bull;">
                        <ListItem>Manillas neón.</ListItem>
                        <ListItem>Silbatos.</ListItem>
                        <ListItem>Antifaces.</ListItem>
                        <ListItem>Espuma.</ListItem>
                        <ListItem>
                            Recreación de baile.
                        </ListItem>
                        <ListItem>
                            Playlist personalizable*.
                        </ListItem>
                        <ListItem>
                            Explosión de conffeti.
                        </ListItem>
                    </List>
                </Stack>
            ),
        },

        {
            question: "¿Qué incluye nuestra decoración?",
            answer: (
                <Stack>
                    <Text>Nuestra decoración incluye:</Text>

                    <List icon="&bull;">
                        <ListItem>
                            300 globos en arco.
                        </ListItem>
                        <ListItem>
                            2 torres de globos.
                        </ListItem>
                        <ListItem>
                            {" "}
                            Cielo de globos.
                        </ListItem>
                        <ListItem>
                            Globo de número metalizado.
                        </ListItem>
                        <ListItem>
                            3 cortinas metalizadas.
                        </ListItem>
                        <ListItem>
                            Nombre del cumpleañero en
                            globos.
                        </ListItem>
                        <ListItem>
                            Globo con número.
                        </ListItem>
                        <ListItem>
                            Un paquete de serpentinas.
                        </ListItem>
                        <ListItem>
                            Un bouquet de globos alusivos al
                            tema.
                        </ListItem>
                        <ListItem>
                            Cartel de feliz cumpleaños.
                        </ListItem>
                        <ListItem>
                            Cartel de bienvenida.
                        </ListItem>
                    </List>
                </Stack>
            ),
        },

        {
            question: "¿Qué trae nuestra Baby Zone?",
            answer: (
                <Stack>
                    <Text>Nuestra Baby Zone incluye:</Text>
                    <List icon="&bull;">
                        <ListItem>
                            Piscina de pelotas.
                        </ListItem>
                        <ListItem>Rodaderos.</ListItem>
                        <ListItem>Tapete de foamy</ListItem>
                        <ListItem>
                            Juegos didácticos
                        </ListItem>
                    </List>
                </Stack>
            ),
        },
    ];
