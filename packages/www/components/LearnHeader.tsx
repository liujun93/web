import Head from 'next/head';
import {
    chakra,
    Box,
    Container,
    Text,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react';

export default function CallToActionWithAnnotation() {
    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <Container maxW={'3xl'}>
                <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{ base: 8, md: 14 }}
                    py={{ base: 18, md: 24 }}>
                    <chakra.h1
                        mb={6}
                        fontSize={{ base: "4xl", md: "6xl" }}
                        fontWeight="bold"
                        lineHeight="none"
                        letterSpacing={{ base: "normal", md: "tight" }}
                        color={useColorModeValue("gray.900", "gray.100")}
                    >
                        Learn{" "}
                        <Text
                            display={{ base: "block", lg: "inline" }}
                            w="full"
                            bgClip="text"
                            bgGradient="linear(to-r, green.400,purple.500)"
                            fontWeight="extrabold"
                        >

                            Cosmology
                        </Text>
                    </chakra.h1>
                    <chakra.p
                        px={{ base: 0, lg: 24 }}
                        mb={6}
                        fontSize={{ base: "lg", md: "xl" }}
                        color={useColorModeValue("gray.600", "gray.300")}
                    >
                        Leverage our CLI to implement your own automated strategies, today. Reduce your time spent clicking buttons and UIs and optimize your investment strategies.
                    </chakra.p>
                </Stack>
            </Container>
        </>
    );
}
