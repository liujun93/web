import React from "react";
import { chakra, Box, Flex, useColorModeValue, Link } from "@chakra-ui/react";
import { AiOutlineLink } from "react-icons/ai";
const Ma = ({ tag, title, description, href }: { tag: string, title: string, description: string, href: string }) => {
    return (
        <Flex
            p={50}
            w="full"
            alignItems="center"
            justifyContent="center"
        >
            <Box
                w="full"
                maxW="sm"
                mx="auto"
                px={4}
                py={3}
                bg={useColorModeValue("white", "gray.800")}
                shadow="md"
                rounded="md"
            >
                <Flex justifyContent="space-between" alignItems="center">
                    <chakra.span
                        fontSize="sm"
                        color={useColorModeValue("gray.800", "gray.400")}
                    >
                        Cosmology Courses
                    </chakra.span>
                    <chakra.span
                        bg={useColorModeValue("purple.200", "purple.300")}
                        color={useColorModeValue("purple.800", "purple.900")}
                        px={3}
                        py={1}
                        rounded="full"
                        textTransform="uppercase"
                        fontSize="xs"
                    >
                        {tag}
                    </chakra.span>
                </Flex>

                <Box>
                    <chakra.h1
                        fontSize="lg"
                        fontWeight="bold"
                        mt={2}
                        color={useColorModeValue("gray.800", "white")}
                    >
                        {title}
                    </chakra.h1>
                    <chakra.p
                        fontSize="sm"
                        mt={2}
                        color={useColorModeValue("gray.600", "gray.300")}
                    >
                        {description}
                    </chakra.p>
                </Box>

                <Box>

                    <Flex alignItems="center" justifyContent="center" mt={4}>
                        <Link
                            mr={2}
                            color={useColorModeValue("gray.800", "gray.400")}
                            _hover={{ color: useColorModeValue("gray.700", "gray.300") }}
                            cursor="pointer"
                            href={href}
                            target="_blank"
                        >
                            <AiOutlineLink />
                        </Link>
                    </Flex>
                </Box>
            </Box>
        </Flex>
    );
};

export default Ma;