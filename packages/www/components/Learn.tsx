import React from "react";
import { chakra, Box, Flex, useColorModeValue, Link, Stack } from "@chakra-ui/react";

import LearnItem from './LearnItem'
const Ma = () => {
    return (
        <Flex
            direction={{ base: "column", md: "row" }}
            bg={useColorModeValue("purple.500")}
            px={8}
            py={24}
            mx="auto"
        >
            <LearnItem
                tag="Course 1"
                title="Managing Mnemonics"
                description="Use encryption keys to store mnemonics securely, while keeping them accesible in the OSX keychain so you can generate, save, and import mnemonics using a simple interface."
                href="https://www.youtube.com/channel/UCA9jzRlnUJRxec8S5Lt7Vcw"
            />
            <LearnItem
                tag="Course 2"
                title="Rebalance Rewards"
                description="Every epoch, use cosmology to rebalance your osmosis daily rewards and tokens so that you can reinvest into a weighted set of liquidity pools of your choice."
                href="https://www.youtube.com/channel/UCA9jzRlnUJRxec8S5Lt7Vcw"
            />
            <LearnItem
                tag="Course 3"
                title="Joining and Locking Tokens"
                description="When you've rebalanced your account with the new tokens, you’re now ready to join the liquidity pools and stake your LP tokens to start earning rewards."
                href="https://www.youtube.com/channel/UCA9jzRlnUJRxec8S5Lt7Vcw"
            />
        </Flex>
    );
};

export default Ma;