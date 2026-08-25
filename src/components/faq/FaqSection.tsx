import {
    Accordion,
    AccordionControl,
    AccordionItem,
    AccordionPanel,
    Stack,
    Text,
    Title,
} from "@mantine/core";
import { ReactNode } from "react";
import { CenteredSection } from "../CenteredSection";

export type FaqSectionItem = {
    question: string;
    answer: string | ReactNode;
};

export function FaqSection({
    questions,
}: {
    questions: FaqSectionItem[];
}) {
    return (
        <CenteredSection>
            <Stack>
                <Title>Preguntas frecuentes</Title>

                <Text>
                    Haga clic en cualquier pregunta para ver
                    su respuesta.
                </Text>

                <Accordion multiple>
                    {questions.map(
                        ({ question, answer }) => (
                            <AccordionItem
                                key={question + answer}
                                value={question}
                            >
                                <AccordionControl>
                                    <Title order={2}>
                                        {question}
                                    </Title>
                                </AccordionControl>
                                <AccordionPanel>
                                    {answer}
                                </AccordionPanel>
                            </AccordionItem>
                        ),
                    )}
                </Accordion>
            </Stack>
        </CenteredSection>
    );
}
