import React from "react";
import { chakra, Box, Text, Flex, useColorModeValue, Link, Stack } from "@chakra-ui/react";

import LearnItem from './LearnItem'
const Ma = () => {
    return (
        <>
            <Flex
                direction={{ base: "column", md: "row" }}
                bg={useColorModeValue("purple.500")}
                px={8}
                py={12}
                textAlign={'center'}
                mx="auto"
            >
                <chakra.h1
                    mb={2}
                    fontSize={{ base: "4xl", md: "6xl" }}
                    fontWeight="bold"
                    lineHeight="none"
                    letterSpacing={{ base: "normal", md: "tight" }}
                    color={useColorModeValue("purple.900", "gray.100")}
                >
                    <Text
                        display={{ base: "block", lg: "inline" }}
                        w="full"
                        bgClip="text"
                        color={useColorModeValue("purple.900", "gray.100")}
                        // bgGradient="linear(to-r, green.400,purple.500)"
                        fontWeight="extrabold"
                    >

                        Security
                    </Text>
                </chakra.h1>
            </Flex>
            <Flex
                direction={{ base: "column", md: "row" }}
                bg={useColorModeValue("purple.500")}
                px={8}
                py={12}
                mx="auto"
            >

                <LearnItem
                    tag="Course 1"
                    title="Basic Mnemonics"
                    description="Get started using Cosmology and use plain-text mnemonics for test environments. Not recommended for production use."
                    href="https://www.youtube.com/watch?v=K46jMo5pjvQ"
                />
                <LearnItem
                    tag="Course 2"
                    title="Encrypted Mnemonics"
                    description="Learn how to encrypt mnemonics for safer use within the Cosmology CLI."
                    href="https://www.youtube.com/watch?v=gHIpLZOpHaw"
                />
            </Flex>
        </>
    );
};

export default Ma;