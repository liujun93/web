import React from "react";
import {
    chakra,
    Box,
    useColorModeValue,
    Stack,
    Image,
    Flex,
} from "@chakra-ui/react";

const CTA = () => {
    return (
        <Flex
            direction={{ base: "column", md: "row" }}
            bg={useColorModeValue("blue.500")}
            px={8}
            py={24}
            mx="auto"
        >
            <Box
                w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
                mx="auto"
                pr={{ md: 20 }}
            >
                <chakra.h2
                    fontSize={{ base: "3xl", sm: "4xl" }}
                    fontWeight="extrabold"
                    lineHeight="shorter"
                    color={useColorModeValue("white", "gray.100")}
                    mb={6}
                >
                    <chakra.span display="block">Ready to dive in?</chakra.span>
                    <chakra.span
                        display="block"
                        color={useColorModeValue("white", "gray.500")}
                    >
                        Use our app today.
                    </chakra.span>
                </chakra.h2>
                <chakra.p
                    mb={6}
                    fontSize={{ base: "lg", md: "xl" }}
                    color={useColorModeValue("gray.100", "gray.300")}
                >
                    Hellonext is a feature voting software where you can allow your users
                    to vote on features, publish roadmap, and complete your customer
                    feedback loop.
                </chakra.p>
                <Stack
                    direction={{ base: "column", sm: "row" }}
                    mb={{ base: 4, md: 8 }}
                    spacing={2}
                >
                    <Box display="inline-flex" rounded="md" shadow="md">
                        <chakra.a
                            display="inline-flex"
                            alignItems="center"
                            justifyContent="center"
                            px={5}
                            py={3}
                            border="solid transparent"
                            fontWeight="bold"
                            w="full"
                            href="https://app.cosmology.finance"
                            target="_target"
                            rounded="md"
                            color={useColorModeValue("white")}
                            bg={useColorModeValue("blue.600", "blue.500")}
                            _hover={{
                                bg: useColorModeValue("blue.700", "blue.600"),
                            }}
                        >
                            Launch App
                        </chakra.a>
                    </Box>
                </Stack>
            </Box>
            <Box w={{ base: "full", md: 10 / 12 }} mx="auto" textAlign="center">
                <Image
                    w="full"
                    rounded="lg"
                    shadow="2xl"
                    src="/cosmology.png"
                    alt="Cosmology screenshot"
                />
            </Box>
        </Flex>
    );
};

export default CTA;