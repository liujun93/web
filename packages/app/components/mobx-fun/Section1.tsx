import React, { ReactNode } from 'react';

import {
    Box,
    Center,
    Text,
    Stack,
    List,
    ListItem,
    ListIcon,
    Button,
    useColorModeValue,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

export default function Pricing({ APR }: { APR: number }) {
    return (
        <Center py={6}>
            <Box
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>
                <Stack
                    textAlign={'center'}
                    p={6}
                    color={useColorModeValue('gray.800', 'white')}
                    align={'center'}>
                    <Text
                        fontSize={'sm'}
                        fontWeight={500}
                        bg={useColorModeValue('blue.50', 'blue.900')}
                        p={2}
                        px={3}
                        color={'blue.500'}
                        rounded={'full'}>
                        Hobby
                    </Text>
                    <Stack direction={'row'} align={'center'} justify={'center'}>
                        <Text fontSize={'3xl'}>$</Text>
                        <Text fontSize={'6xl'} fontWeight={800}>
                            {APR}
                        </Text>
                        <Text color={'gray.500'}>/month</Text>
                    </Stack>
                </Stack>

                <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
                    <List spacing={3}>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="blue.400" />
                            5.000 page views
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="blue.400" />
                            50 automation executions
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="blue.400" />
                            50 identified users
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="blue.400" />
                            All features
                        </ListItem>
                    </List>

                    <Button
                        mt={10}
                        w={'full'}
                        bg={'blue.400'}
                        color={'white'}
                        rounded={'xl'}
                        boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                        _hover={{
                            bg: 'blue.500',
                        }}
                        _focus={{
                            bg: 'blue.500',
                        }}>
                        Start your trial
                    </Button>
                </Box>
            </Box>
        </Center>
    );
}