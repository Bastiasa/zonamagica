import { CenteredSection } from "@/src/components/CenteredSection";
import { withBasePath } from "@/src/utils/withBasepath";
import {
    AppShellSection,
    Button,
    Image,
    Stack,
    Text,
    Title,
} from "@mantine/core";
import Link from "next/link";

export default function AboutUsPageHandler() {
    const contactUsButton = (
        <Link className="mx-auto!" href={"/contacto"}>
            <Button>Contáctanos</Button>
        </Link>
    );

    return (
        <>
            <CenteredSection>
                <Stack gap={"lg"}>
                    <Title ta={"center"}>
                        Sobre nosotros
                    </Title>

                    <Stack mx={"auto"} maw={360}>
                        <Image
                            src={withBasePath(
                                "/images/about-us/boss.png",
                            )}
                            width={"100%"}
                            maw={360}
                            mx={"auto"}
                            className="aspect-square"
                            bdrs={16}
                        />
                        <Title order={2} ta={"center"}>
                            Sebastián Zuluaga
                        </Title>
                    </Stack>

                    {contactUsButton}

                    <Text>
                        Hola, me llamo <b>Sebastián</b>. Soy
                        el encargado de administrar{" "}
                        <b>Zona Mágica</b> y de coordinar a
                        nuestro equipo de recreadores.
                    </Text>

                    <Text>
                        En Zona Mágica nos dedicamos a crear
                        experiencias llenas de diversión,
                        imaginación y momentos inolvidables
                        para compartir en familia. Nos
                        especializamos en la recreación para{" "}
                        <b>
                            fiestas infantiles y
                            celebraciones
                        </b>
                        , llevando juegos, actividades y
                        mucha energía directamente a tu
                        evento.
                    </Text>

                    <Text>
                        Nuestro objetivo es que cada
                        celebración sea diferente. Por eso
                        nos encargamos de preparar y
                        coordinar cada actividad teniendo en
                        cuenta la edad de los invitados, el
                        tipo de celebración y el ambiente
                        que quieres crear.
                    </Text>

                    <Text>
                        Queremos que los niños se diviertan,
                        participen y se sientan
                        protagonistas de una experiencia
                        realmente especial, mientras sus
                        familias pueden disfrutar de ese
                        momento junto a ellos.
                    </Text>

                    <Text>
                        Detrás de cada actividad hay un
                        equipo de recreadores que trabaja
                        con entusiasmo, creatividad y
                        responsabilidad. Nos gusta
                        involucrarnos en cada evento y
                        cuidar los pequeños detalles que
                        hacen que una fiesta pase de ser una
                        reunión más a convertirse en un
                        recuerdo que todos quieran volver a
                        contar.
                    </Text>

                    <Text>
                        <b>
                            Zona Mágica nació con una idea
                            muy sencilla:
                        </b>{" "}
                        hacer que celebrar sea todavía más
                        divertido. Cada evento es una nueva
                        oportunidad para llevar un poquito
                        de esa magia a más familias.
                    </Text>

                    <Stack mt={32} gap="md">
                        <Title order={2}>
                            ¿Qué hacemos?
                        </Title>

                        <Text>
                            Nos encargamos de llevar la
                            diversión directamente a tu
                            celebración. Diseñamos
                            actividades y dinámicas pensadas
                            para que los niños puedan jugar,
                            participar y disfrutar junto a
                            sus amigos y familiares.
                        </Text>

                        <Text>
                            Dependiendo de tu evento,
                            podemos ofrecer recreación,
                            juegos, concursos, actividades
                            temáticas, animación y
                            diferentes experiencias pensadas
                            para convertir tu fiesta en un
                            momento inolvidable.
                        </Text>
                    </Stack>

                    <Stack mt={32} gap="md">
                        <Title order={2}>
                            Nuestra forma de trabajar
                        </Title>

                        <Text>
                            Nos gusta conocer cada evento
                            antes de comenzar. Así podemos
                            entender qué estás planeando y
                            preparar una experiencia que se
                            adapte a tus necesidades.
                        </Text>

                        <Text>
                            Coordinamos a nuestros
                            recreadores, preparamos las
                            actividades y nos encargamos de
                            que todo esté listo para que,
                            cuando llegue el momento, tú
                            solamente tengas que disfrutar
                            de la celebración.
                        </Text>
                    </Stack>

                    <Stack mt={32} gap="md">
                        <Title order={2}>
                            Nuestra misión
                        </Title>

                        <Text>
                            Crear momentos de diversión que
                            los niños recuerden con una
                            sonrisa y que las familias
                            disfruten compartiendo.
                        </Text>

                        <Text>
                            Porque para nosotros una fiesta
                            no es solamente una celebración:
                            es una oportunidad para crear
                            recuerdos que pueden quedarse
                            con nosotros durante mucho
                            tiempo.
                        </Text>
                    </Stack>
                    {contactUsButton}
                </Stack>
            </CenteredSection>
        </>
    );
}
