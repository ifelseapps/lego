import React from 'react';
import { Meta } from '@storybook/react';
import { Calendar as Component } from './Calendar';

export default {
  title: 'Lego/Components/Calendar',
  component: Component,
} as Meta;

const Template = () => <Component />;

export const Base = Template.bind({});
Base.args = {};
