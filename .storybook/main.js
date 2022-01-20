module.exports = {
  'stories': [
    '../docs/**/*.(tsx|mdx)',
    "../src/components/**/*.stories.tsx"
  ],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-jest',
  ],
  'framework': '@storybook/react'
};
