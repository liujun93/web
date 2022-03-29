module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-toolbars",
    "@storybook/addon-storysource",
    '@storybook/addon-links/register',
    '@storybook/addon-viewport/register',
    '@chakra-ui/storybook-addon'
    // 'storybook-addon-chakra-theme/dist/register'
  ]
}