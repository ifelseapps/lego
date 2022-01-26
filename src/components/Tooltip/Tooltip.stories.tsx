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
    <Component {...args}>
      <Component.Trigger>Trigger</Component.Trigger>
      <Component.Content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda autem deserunt dolore dolores ducimus error
        est incidunt laudantium, necessitatibus non odit, quibusdam rem repellat saepe sit, soluta tenetur unde.
      </Component.Content>
    </Component>
  </div>;

export const Base = Template.bind({});
Base.args = {};
