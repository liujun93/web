import { FaTelegram, FaTwitter, FaDiscord, FaGithub, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';
import {
    Box,
    Flex,
    Container,
    Stack,
    SimpleGrid,
    Text,
    Link,
    Tag,
    VisuallyHidden,
    chakra,
    useColorModeValue,
} from '@chakra-ui/react';
import Logo from './Logo';

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };

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
            color={useColorModeValue('gray.700', 'gray.200')}
            py={12}
        >
            <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Cosmology</ListHeader>
            <Link href={'/'}>Home</Link>
            </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Product</ListHeader>
            <Link href={'/overview'}>Overview</Link>
            {/* <Link href={'/npm-module'}>Npm Module</Link> */}
            <Link href={'/learn'}>Tutorials</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Legal</ListHeader>
            <Link href={'/disclaimer'}>Disclaimer</Link>
          </Stack>
        </SimpleGrid>
      </Container>
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
                        <SocialButton label={'Github'} href={'https://github.com/cosmology-finance'} >
                            <FaGithub />
                        </SocialButton>
                        <SocialButton label={'Twitter'} href={'https://twitter.com/cosmology_fi'} >
                            <FaTwitter />
                        </SocialButton>
                        <SocialButton label={'Telegram'} href={'https://t.me/cosmologyfinance'}>
                            <FaTelegram />
                        </SocialButton>
                        <SocialButton label={'Discord'} href={'https://discord.gg/xh3ZwHj2qQ'}>
                            <FaDiscord />
                        </SocialButton>
                        <SocialButton label={'YouTube'} href={'"https://www.youtube.com/channel/UCA9jzRlnUJRxec8S5Lt7Vcw"'}>
                            <FaYoutube />
                        </SocialButton>
                    </Stack>

                </Container>
            </Box>
        </Box >
    );
}