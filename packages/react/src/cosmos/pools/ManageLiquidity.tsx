import React from 'react';
import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  useColorModeValue,
} from '@chakra-ui/react';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

export default function () {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>manageLiquidity</Heading>
        <CircularProgress value={40} color='green.400'>
        <CircularProgressLabel>40%</CircularProgressLabel>
        </CircularProgress>
        <CircularProgress value={40} color='green.400'>
        <CircularProgressLabel>40%</CircularProgressLabel>
        </CircularProgress>
        </Stack>
      </Container>
    </Box>
  );
}

