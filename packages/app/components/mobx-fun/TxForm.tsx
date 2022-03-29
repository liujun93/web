import React, { useState, FC } from 'react';
import { useStore } from '@cosmology/react';

import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Box,
    HStack,
    useColorModeValue,
} from '@chakra-ui/react';

export const TxForm: FC = () => {
    const store = useStore();
    const [memo, setMemo] = useState("");
    const [status, setStatus] = useState("");


    const updateStore = (event: React.ChangeEvent<EventTarget>) => {
        event.preventDefault();
        store.addTransaction(memo, Number(status))
        setMemo("");
        setStatus("");
    };

    return (
        <form onSubmit={e => updateStore(e)}>
            <Flex
                align={'center'}
                justify={'center'}
            >
                <Stack
                    w={'full'}
                    maxW={'md'}
                    bg={useColorModeValue('white', 'gray.700')}
                    rounded={'xl'}
                    boxShadow={'lg'}
                    p={6}
                    my={2}>
                    <Heading fontSize={{ base: '1xl', md: '2xl' }}>
                        Enter TX
                    </Heading>
                    <HStack>
                        <Box>
                            <FormControl id="memo" isRequired>
                                <FormLabel>memo</FormLabel>
                                <Input
                                    placeholder="your-memo"
                                    _placeholder={{ color: 'gray.500' }}
                                    type="text"
                                    value={memo}
                                    onChange={e => setMemo(e.target.value)}

                                />
                            </FormControl>
                        </Box>
                        <Box>
                            <FormControl id="status" isRequired>
                                <FormLabel>status</FormLabel>
                                <Input
                                    type="number"
                                    value={status}
                                    onChange={e => setStatus(e.target.value)}
                                />
                            </FormControl>
                        </Box>
                    </HStack>
                    <Stack spacing={6}>
                        <Button
                            colorScheme="teal"
                            bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
                            color={'white'}
                            type="submit"
                            _hover={{
                                bgGradient: "linear(to-r, teal.300, teal.400, teal.500)"
                            }}>
                            Create a Transaction
                        </Button>
                    </Stack>
                </Stack>
            </Flex>
        </form>
    );
}