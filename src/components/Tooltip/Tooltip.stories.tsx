import React from 'react';
import { Meta } from '@storybook/react';
import { ITooltipProps, Tooltip as Component } from 'src/components/Tooltip/Tooltip';

export default {
  title: 'Lego/Components/Tooltip',
  component: Component,
} as Meta;

const Template = (args: ITooltipProps) =>
  <div style={{ width: '300px', margin: ' 50px auto' }}>
    Длинное название подсказки
    {' '}
    <Component {...args} render={() => <div>Tooltip 1 content</div>}>
      X
    </Component>
    <br />
    <br />
    <br />
    <Component {...args} render={() => <div>Tooltip 2 content</div>}>
      Tooltip 2
    </Component>
  </div>;

export const Base = Template.bind({});
Base.args = {};
