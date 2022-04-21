import React, { useState, useEffect } from 'react';
import {
  Heading,
  Icon,
  Box,
  Text,
  Link,
  Badge,
  Flex,
  Grid,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Th,
  Tr,
  Td,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import { MdOutlineChevronRight } from 'react-icons/md';
import { osmosis } from '../asset-list';

interface dataType {
  name: string;
  imgSrc: string;
  ibc?: object;
  tag?: string;
}

export default function () {
  const [data, setData] = useState<dataType[]>([]);

  useEffect(() => {
    if (osmosis.assets.length > 0) {
      const getDataArray = osmosis.assets.map(
        ({ name, logo_URIs, ibc, type_asset }) => ({
          name: name,
          imgSrc: logo_URIs.png,
          ibc: ibc,
          tag: type_asset,
        })
      );
      setData(getDataArray);
    }
  }, []);

  return (
    <Box>
      <Heading p={8} pb={0}>
        My Assets
      </Heading>
      <Grid
        templateColumns={{
          base: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
        maxW="3xl"
        gap={6}
        px={8}
        py={4}
      >
        <Box py={{ md: 2 }}>
          <Text fontWeight="semibold" opacity={0.7}>
            Total Assets
          </Text>
          <Text fontSize={{ base: '3xl', md: '4xl' }} fontWeight="extrabold">
            $75
          </Text>
        </Box>
        <Box py={{ md: 2 }}>
          <Text fontWeight="semibold" opacity={0.7}>
            Available Assets
          </Text>
          <Text fontSize={{ base: '3xl', md: '4xl' }} fontWeight="extrabold">
            $3.45
          </Text>
        </Box>
        <Box py={{ md: 2 }}>
          <Text fontWeight="semibold" opacity={0.7}>
            Bonded Assets
          </Text>
          <Text fontSize={{ base: '3xl', md: '4xl' }} fontWeight="extrabold">
            $6
          </Text>
        </Box>
        <Box py={{ md: 2 }}>
          <Text fontWeight="semibold" opacity={0.7}>
            Staked OSMO
          </Text>
          <Text fontSize={{ base: '3xl', md: '4xl' }} fontWeight="extrabold">
            $25
          </Text>
        </Box>
      </Grid>
      <Box bg={useColorModeValue('blackAlpha.50', 'whiteAlpha.50')} p={8}>
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Assets
        </Text>
        <TableContainer borderRadius="xl">
          <Table variant="simple" colorScheme="whiteAlpha">
            <Thead>
              <Tr bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.50')}>
                <Th py={4}>Asset / Chain</Th>
                <Th py={4} isNumeric={true}>
                  Balance
                </Th>
                <Th py={4} isNumeric={true}>
                  IBC Deposit
                </Th>
                <Th py={4} isNumeric={true}>
                  IBC Withdraw
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map(({ name, imgSrc, ibc, tag }) => (
                <Tr key={name}>
                  <Td>
                    <Flex align="center">
                      <Box w={{ base: 14, sm: 16 }} mr={4}>
                        <Image src={imgSrc} />
                      </Box>
                      <Text mr={4}>{name}</Text>
                      <Badge
                        bg={useColorModeValue('primary.600', 'primary.400')}
                        color="white"
                        borderRadius="full"
                        px={2}
                      >
                        {tag}
                      </Badge>
                    </Flex>
                  </Td>
                  <Td isNumeric={true}>
                    <Text fontWeight="semibold" mb={0.5}>
                      0.2186
                    </Text>
                    <Text opacity={0.7}>$1.86</Text>
                  </Td>
                  {ibc && Object.keys(ibc).length > 0 ? (
                    <Td isNumeric={true}>
                      <Link color="orange.300" href="#">
                        <Text>
                          Deposit <Icon as={MdOutlineChevronRight} />
                        </Text>
                      </Link>
                    </Td>
                  ) : (
                    <Td></Td>
                  )}
                  {ibc && Object.keys(ibc).length > 0 ? (
                    <Td isNumeric={true}>
                      <Link color="orange.300" href="#">
                        <Text>
                          Withdraw <Icon as={MdOutlineChevronRight} />
                        </Text>
                      </Link>
                    </Td>
                  ) : (
                    <Td></Td>
                  )}
                </Tr>
              ))}
            </Tbody>
            <Tfoot>
              <Tr bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.50')}>
                <Th py={4}>Asset / Chain</Th>
                <Th py={4} isNumeric={true}>
                  Balance
                </Th>
                <Th py={4} isNumeric={true}>
                  IBC Deposit
                </Th>
                <Th py={4} isNumeric={true}>
                  IBC Withdraw
                </Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
