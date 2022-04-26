import React, { FC, ReactNode } from "react";
import { ITx } from "../../testing-mobx/store";
import {
    Flex,
    useColorModeValue,
    ButtonGroup,
    IconButton,
    Table,
    Thead,
    Tr,
    Th,
    Td,
    Tbody,
    Box,
    Icon
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";

// NOTE you have to update the header to render new columns here:
const header = ["hash", "memo", "created", "status", "actions"];

const TdElement: FC<{ name: string, children: ReactNode }> = ({ name, children }) => {
    return (
        <><Td
            display={{
                base: "table-cell",
                md: "none",
            }}
            sx={{
                "@media print": {
                    display: "none",
                },
                textTransform: "uppercase",
                color: "gray.400",
                fontSize: "xs",
                fontWeight: "bold",
                letterSpacing: "wider",
                fontFamily: "heading",
            }}
        >
            {name}
        </Td>
            <Td
                color={"gray.500"}
                fontSize="md"
                fontWeight="hairline"
            >
                {children}
            </Td></>
    )
};


export const TxTable: FC<{ transactions: Array<ITx> }> = ({ transactions }) => {

    return (
        <Flex
            w="full"
            p={50}
            alignItems="center"
            justifyContent="center"
        >
            <Table
                w="full"
                bg="white"
                display={{
                    base: "block",
                    md: "table",
                }}
                sx={{
                    "@media print": {
                        display: "table",
                    },
                }}
            >
                <Thead
                    display={{
                        base: "none",
                        md: "table-header-group",
                    }}
                    sx={{
                        "@media print": {
                            display: "table-header-group",
                        },
                    }}
                >
                    <Tr>
                        {header.map((x) => (
                            <Th key={x}>{x}</Th>
                        ))}
                    </Tr>
                </Thead>
                <Tbody
                    display={{
                        base: "block",
                        lg: "table-row-group",
                    }}
                    sx={{
                        "@media print": {
                            display: "table-row-group",
                        },
                    }}
                >
                    {transactions.map((transaction, tid) => {
                        return (
                            <Tr
                                key={tid}
                                display={{
                                    base: "grid",
                                    md: "table-row",
                                }}
                                sx={{
                                    "@media print": {
                                        display: "table-row",
                                    },
                                    gridTemplateColumns: "minmax(0px, 35%) minmax(0px, 65%)",
                                    gridGap: "10px",
                                }}
                            >
                                <TdElement name="hash">
                                    {transaction.hash}
                                </TdElement>

                                <TdElement name="memo">
                                    {transaction.memo}
                                </TdElement>

                                <TdElement name="created">
                                    {transaction.created.toDateString()}
                                </TdElement>

                                <TdElement name="status">
                                    {transaction.status === 0 ? <Box color={'green.400'} px={2}>
                                        <Icon as={CheckIcon} />
                                    </Box>
                                        : <Box color={'red.400'} px={2}>
                                            <Icon as={CloseIcon} />
                                        </Box>
                                    }
                                </TdElement>

                                <Td
                                    display={{
                                        base: "table-cell",
                                        md: "none",
                                    }}
                                    sx={{
                                        "@media print": {
                                            display: "none",
                                        },
                                        textTransform: "uppercase",
                                        color: "gray.400",
                                        fontSize: "xs",
                                        fontWeight: "bold",
                                        letterSpacing: "wider",
                                        fontFamily: "heading",
                                    }}
                                >
                                    Actions
                                </Td>
                                <Td>
                                    <ButtonGroup variant="solid" size="sm" spacing={3}>
                                        <IconButton
                                            aria-label="yolo"
                                            icon={<BsBoxArrowUpRight />}
                                        />
                                        <IconButton
                                            aria-label="yolo3"
                                            icon={<BsFillTrashFill />}
                                        />
                                    </ButtonGroup>
                                </Td>
                            </Tr>
                        );
                    })}
                </Tbody>
            </Table>
        </Flex>
    );
}