import React from 'react';
import { Meta } from '@storybook/react';
import { ITooltipProps, Tooltip as Component } from 'src/components/Tooltip/Tooltip';

export default {
  title: 'Lego/Components/Tooltip',
  component: Component,
} as Meta;

const Template = (args: ITooltipProps) =>
  <Component {...args}>
    Tooltip
  </Component>;

export const Base = Template.bind({});
Base.args = {};
