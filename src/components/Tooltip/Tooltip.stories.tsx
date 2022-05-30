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

export const Base: FC = () => {
  const [visible, setVisible] = useState(false);
  const [triggerEl, setTriggerEl] = useState<HTMLButtonElement>(null);
  const clickHandler = () => {
    setVisible((value) => !value);
  };
  return (
    <div>
      <div>
        <button ref={setTriggerEl} onClick={clickHandler}>
          Click me!
        </button>
      </div>
      <Component element={triggerEl} visible={visible}>
        <div>Inner content</div>
      </Component>
    </div>
  );
};
