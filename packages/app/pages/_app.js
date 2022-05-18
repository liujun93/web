import { ChakraProvider } from '@chakra-ui/react';
import { defaultTheme } from '../theme';

import { BlockchainStore } from '../testing-mobx/store';
import { StoreProvider } from '../testing-mobx/store-react';

const store = new BlockchainStore();

function CosmologyApp({ Component, pageProps }) {
  return (
    <StoreProvider store={store}>
      <ChakraProvider theme={defaultTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </StoreProvider>
  );
}

export default CosmologyApp;
