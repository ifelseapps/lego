import React from 'react';
import { Meta } from '@storybook/react';
import { Calendar as Component, CalendarProps } from './Calendar';

export default {
  title: 'Lego/Components/Calendar',
  component: Component,
} as Meta;

const Template = (props: CalendarProps) => <Component {...props} />;

export const Base = Template.bind({});
Base.args = {
  month: 11,
  year: 2022,
};
