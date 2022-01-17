import { Meta } from '@storybook/react';

export default {
  title: 'Lego'
} as Meta;

export const Colors = () => (
  <div>Color palette</div>
);

Colors.parameters = {
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true,
    },
  },
};
