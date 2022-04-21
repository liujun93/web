import React, { useState, useEffect } from 'react';
import {
  Box,
  Text,
  Flex,
  Image,
  useColorModeValue,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Th,
  Tr,
  Td,
  Checkbox,
} from '@chakra-ui/react';
import { osmosis } from '../asset-list';

interface dataType {
  name: string;
  imgSrc: string;
  checked: boolean;
}

export default function () {
  const [data, setData] = useState<dataType[]>([]);

  useEffect(() => {
    if (osmosis.assets.length > 0) {
      const getDataArray = osmosis.assets.map(({ name, logo_URIs }) => ({
        name: name,
        imgSrc: logo_URIs.png,
        checked: false,
      }));
      setData(getDataArray);
    }
  }, []);

  return (
    <Box p={8}>
      <TableContainer
        bg={useColorModeValue('blackAlpha.50', 'whiteAlpha.50')}
        borderRadius="xl"
      >
        <Table variant="simple" colorScheme="whiteAlpha">
          <Thead>
            <Tr bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.50')}>
              <Th w={4} paddingInlineEnd={0} py={4}>
                <Flex justify="center" align="center">
                  <Checkbox
                    borderColor={useColorModeValue(
                      'blackAlpha.400',
                      'whiteAlpha.600'
                    )}
                    colorScheme="primary"
                    onChange={(e) =>
                      setData((pre) => {
                        const arr = pre.map(({ checked, ...rest }) => {
                          return { ...rest, checked: e.target.checked };
                        });
                        return arr;
                      })
                    }
                  />
                </Flex>
              </Th>
              <Th py={4}>Asset / Chain</Th>
              <Th py={4} isNumeric={true}>
                Balance
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map(({ name, imgSrc, checked }) => (
              <Tr key={name}>
                <Td w={4} paddingInlineEnd={0}>
                  <Flex justify="center" align="center">
                    <Checkbox
                      id={name}
                      value={name}
                      isChecked={checked}
                      borderColor={useColorModeValue(
                        'blackAlpha.300',
                        'whiteAlpha.500'
                      )}
                      colorScheme="primary"
                      onChange={(e) =>
                        setData((pre) => {
                          const newArr = pre.map(
                            ({
                              name: defaultName,
                              checked: defaultChecked,
                              ...rest
                            }) => {
                              if (defaultName === e.target.id) {
                                return {
                                  ...rest,
                                  name: defaultName,
                                  checked: e.target.checked,
                                };
                              }
                              return {
                                ...rest,
                                name: defaultName,
                                checked: defaultChecked,
                              };
                            }
                          );
                          return newArr;
                        })
                      }
                    />
                  </Flex>
                </Td>
                <Td>
                  <Flex align="center">
                    <Box w={{ base: 14, sm: 16 }} mr={4}>
                      <Image src={imgSrc} />
                    </Box>
                    <Text mr={4}>{name}</Text>
                  </Flex>
                </Td>
                <Td isNumeric={true}>
                  <Text fontWeight="semibold" mb={0.5}>
                    0.2186
                  </Text>
                  <Text opacity={0.7}>$1.86</Text>
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.50')}>
              <Th w={4} paddingInlineEnd={0} py={4}>
                <Flex justify="center" align="center">
                  <Checkbox
                    borderColor={useColorModeValue(
                      'blackAlpha.400',
                      'whiteAlpha.600'
                    )}
                    colorScheme="primary"
                    onChange={(e) =>
                      setData((pre) => {
                        const arr = pre.map(({ checked, ...rest }) => {
                          return { ...rest, checked: e.target.checked };
                        });
                        return arr;
                      })
                    }
                  />
                </Flex>
              </Th>
              <Th py={4}>Asset / Chain</Th>
              <Th py={4} isNumeric={true}>
                Balance
              </Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
}
