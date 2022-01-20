import React from 'react';
import { Meta } from '@storybook/react';
import { Button as Component, IButtonProps } from 'src/components/Button/Button';

export default {
  title: 'Lego/Components/Button',
  component: Component,
} as Meta;

const Template = (args: IButtonProps) => <Component {...args}/>;

export const Base = Template.bind({});
