import React, { FC, useRef, useState } from 'react';
import { Meta } from '@storybook/react';
import {
  Tooltip as Component,
  ITooltipProps,
} from 'src/components/Tooltip/Tooltip';

export default {
  title: 'Lego/Components/Tooltip',
  component: Component,
} as Meta;

export const Base: FC<ITooltipProps> = (props) => {
  const [triggerEl, setTriggerEl] = useState<HTMLButtonElement>(null);
  return (
    <div>
      <div style={{ padding: 30 }}>
        <button ref={setTriggerEl}>Click me!</button>
      </div>
      <Component {...props} element={triggerEl}>
        <div>Inner content</div>
      </Component>
    </div>
  );
};
