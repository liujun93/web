import React from "react";
import {
    chakra,
    Box,
    useColorModeValue,
} from "@chakra-ui/react";

const Disclaimer = () => {
    return (
        <Box pos="relative" overflow="hidden">
            <Box maxW="7xl" mx="auto">
                <Box
                    pos="relative"
                    pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
                    w="full"
                    border="solid 1px transparent"
                >
                    <Box
                        maxW={{ base: "7xl" }}
                        px={{ base: 4, sm: 6, lg: 8 }}
                        mt={{ base: 12, md: 16, lg: 20, xl: 28 }}
                    >
                        <Box
                            textAlign="center"
                            w={{ base: "full", md: 11 / 12, xl: 8 / 12 }}
                            mx="auto"
                        >
                            <chakra.h1
                                fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
                                letterSpacing="tight"
                                lineHeight="short"
                                fontWeight="extrabold"
                                color={useColorModeValue("gray.900", "white")}
                            >
                                <chakra.span display={{ base: "block", xl: "inline" }}>
                                    Disclaimer
                                </chakra.span>
                            </chakra.h1>
                            <chakra.h2
                                fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                                letterSpacing="tight"
                                lineHeight="short"
                                fontWeight="extrabold"
                                color={useColorModeValue("gray.900", "white")}
                            >
                                <chakra.span display={{ base: "block", xl: "inline" }}>
                                    No Investment Advice
                                </chakra.span>
                            </chakra.h2>
                            <chakra.p
                                mt={{ base: 3, sm: 5, md: 5 }}
                                mx={{ sm: "auto", lg: 0 }}
                                mb={6}
                                fontSize={{ base: "lg", md: "xl" }}
                                color="gray.500"
                                lineHeight="base"
                            >
                                The information provided on this website does not constitute investment advice, financial advice, trading advice, or any other sort of advice and you should not treat any of the website's content as such. Cosmology does not recommend that any cryptocurrency should be bought, sold, or held by you. Do conduct your own due diligence and consult your financial advisor before making any investment decisions.
                            </chakra.p>
                            <chakra.h2
                                fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                                letterSpacing="tight"
                                lineHeight="short"
                                fontWeight="extrabold"
                                color={useColorModeValue("gray.900", "white")}
                            >
                                <chakra.span display={{ base: "block", xl: "inline" }}>
                                    Accuracy of Information
                                </chakra.span>
                            </chakra.h2>

                            <chakra.p
                                mt={{ base: 3, sm: 5, md: 5 }}
                                mx={{ sm: "auto", lg: 0 }}
                                mb={6}
                                fontSize={{ base: "lg", md: "xl" }}
                                color="gray.500"
                                lineHeight="base"
                            >
                                Cosmology will strive to ensure accuracy of information listed on this website although it will not hold any responsibility for any missing or wrong information. Cosmology provides all information as is. You understand that you are using any and all information available here at your own risk.
                            </chakra.p>
                            <chakra.h2
                                fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                                letterSpacing="tight"
                                lineHeight="short"
                                fontWeight="extrabold"
                                color={useColorModeValue("gray.900", "white")}
                            >
                                <chakra.span display={{ base: "block", xl: "inline" }}>
                                    Risk Statement
                                </chakra.span>
                            </chakra.h2>

                            <chakra.p
                                mt={{ base: 3, sm: 5, md: 5 }}
                                mx={{ sm: "auto", lg: 0 }}
                                mb={6}
                                fontSize={{ base: "lg", md: "xl" }}
                                color="gray.500"
                                lineHeight="base"
                            >
                                The trading of cryptocurrencies has potential rewards, and it also has potential risks involved. Trading may not be suitable for all people. Anyone wishing to invest should seek his or her own independent financial or professional advice.
                            </chakra.p>
                            <chakra.h2
                                fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                                letterSpacing="tight"
                                lineHeight="short"
                                fontWeight="extrabold"
                                color={useColorModeValue("gray.900", "white")}
                            >
                                <chakra.span display={{ base: "block", xl: "inline" }}>
                                    Tax Compliance
                                </chakra.span>
                            </chakra.h2>

                            <chakra.p
                                mt={{ base: 3, sm: 5, md: 5 }}
                                mx={{ sm: "auto", lg: 0 }}
                                mb={6}
                                fontSize={{ base: "lg", md: "xl" }}
                                color="gray.500"
                                lineHeight="base"
                            >
                                The users of Cosmology app are solely responsible to determinate what, if any, taxes apply to their cryptocurrency transactions. The owners of, or contributors to, the Cosmology app are NOT responsible for determining the taxes that apply to cryptocurrency transactions.
                            </chakra.p>
                            <chakra.h2
                                fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                                letterSpacing="tight"
                                lineHeight="short"
                                fontWeight="extrabold"
                                color={useColorModeValue("gray.900", "white")}
                            >
                                <chakra.span display={{ base: "block", xl: "inline" }}>
                                    Software Disclaimer
                                </chakra.span>
                            </chakra.h2>

                            <chakra.p
                                mt={{ base: 3, sm: 5, md: 5 }}
                                mx={{ sm: "auto", lg: 0 }}
                                mb={6}
                                fontSize={{ base: "lg", md: "xl" }}
                                color="gray.500"
                                lineHeight="base"
                            >
                                Cosmology leverages decentralized peer-to-peer blockchains that people can use to create liquidity and trade IBC enabled tokens. These blockchains are made up of free, public, and open-source software. Your use of Cosmology involves various risks, including, but not limited, to losses while digital assets are being supplied to liquidity pools and losses due to the fluctuation of prices of tokens in a trading pair or liquidity pool, including Impermanence Loss. Before using any pool on these blockchains, you should review the relevant documentation to make sure you understand how they work, and the pool you use on each blockchain works. Additionally, just as you can access email protocols, such as SMTP, through multiple email clients, you can access pools on the blockchain through several web or mobile interfaces. You are responsible for doing your own diligence on those interfaces to understand the fees and risks they present.
                            </chakra.p>
                            <chakra.p
                                mt={{ base: 3, sm: 5, md: 5 }}
                                mx={{ sm: "auto", lg: 0 }}
                                mb={6}
                                fontSize={{ base: "lg", md: "xl" }}
                                color="gray.500"
                                lineHeight="base"
                            >

                                AS DESCRIBED IN THE COSMOLOGY LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND. Although Web, Inc. ( “Web Incubator” ) developed much of the initial code for the Cosmology app, it does not provide, own, or control the leveraged blockchain protocols, which are run by decentralized validator sets. Upgrades and modifications to these protocol are managed in a community-driven way by holders of various governance tokens. No developer or entity involved in creating Cosmology will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the Cosmology app, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.
                            </chakra.p>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Disclaimer;