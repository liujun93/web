import { FaTelegram, FaTwitter, FaDiscord } from 'react-icons/fa';
import { ReactNode } from 'react';
import {
    Box,
    Flex,
    Container,
    Stack,
    SimpleGrid,
    Text,
    Link,
    VisuallyHidden,
    chakra,
    useColorModeValue,
} from '@chakra-ui/react';
import Logo from './Logo';

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode;
    label: string;
    href: string;
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default function LargeWithAppLinksAndSocial() {
    return (
        <Box
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Flex
                align={'center'}
                _before={{
                    content: '""',
                    borderBottom: '1px solid',
                    borderColor: useColorModeValue('gray.200', 'gray.700'),
                    flexGrow: 1,
                    mr: 8,
                }}
                _after={{
                    content: '""',
                    borderBottom: '1px solid',
                    borderColor: useColorModeValue('gray.200', 'gray.700'),
                    flexGrow: 1,
                    ml: 8,
                }}>
                <Logo w={6} />
            </Flex>
            <Box>
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ md: 'space-between' }}
                    align={{ md: 'center' }}>
                    <Text>© 2022 Cosmology. All rights reserved</Text>

                    <Stack direction={'row'} spacing={6}>
                        <Link href={'/disclaimer'}>Disclaimer</Link>
                        <SocialButton label={'Twitter'} href={'https://twitter.com/CosmologyApp'} >
                            <FaTwitter />
                        </SocialButton>
                        <SocialButton label={'Telegram'} href={'https://t.me/cosmologyfinance'}>
                            <FaTelegram />
                        </SocialButton>
                        <SocialButton label={'Discord'} href={'https://discord.gg/xh3ZwHj2qQ'}>
                            <FaDiscord />
                        </SocialButton>
                    </Stack>

                </Container>
            </Box>
        </Box >
    );
}