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
                py={2}
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

                        Basics
                    </Text>
                </chakra.h1>
            </Flex>
            <Flex
                direction={{ base: "column", md: "row" }}
                bg={useColorModeValue("purple.500")}
                px={8}
                py={24}
                mx="auto"
            >
                <LearnItem
                    tag="Course 3"
                    title="Rebalance Osmosis Balance"
                    description="Every epoch, use cosmology to rebalance your osmosis daily rewards and tokens so that you can reinvest into a weighted set of liquidity pools of your choice."
                    href="https://www.youtube.com/watch?v=dggzaQa9Dzs"
                />
                <LearnItem
                    tag="Course 4"
                    title="Join Osmosis Pools"
                    description="When you've rebalanced your account with the new tokens, you’re now ready to join the liquidity pools."
                    href="https://www.youtube.com/watch?v=3FPED9phCFQ"
                />
                <LearnItem
                    tag="Course 5"
                    title="Locking LP Tokens"
                    description="Once you've joined a pool, you're ready to stake your LP tokens to start earning rewards."
                    href="https://www.youtube.com/watch?v=Gj6S2POM5e4"
                />
            </Flex>
        </>
    );
};

export default Ma;


