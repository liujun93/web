import { addDecorator } from "@storybook/react";
import { Themes, ThemesProvider, withThemesProvider } from 'storybook-addon-chakra-theme';
import { extendTheme } from "@chakra-ui/react"

const theme1 = extendTheme({
  name: 'theme1',
  primaryColor: 'blue',
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
});

const theme2 = extendTheme({
  name: 'theme2',
  primaryColor: 'red',
  colors: {
    brand: {
      100: "red",
      // ...
      900: "#1a202c",
    },
  },
});



export const parameters = {
  chakra: {
    theme: theme1,
  },
}

// addDecorator(withThemesProvider([theme1, theme2]));
