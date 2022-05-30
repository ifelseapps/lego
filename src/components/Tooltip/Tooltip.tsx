import { cnTooltip } from './cn';
import React, { FC, RefObject, useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import { Portal } from '../Portal';
import './tooltip.css';

export interface ITooltipProps {
  visible: boolean;
  element: HTMLElement;
}

export const Tooltip: FC<ITooltipProps> = ({ element, visible, children }) => {
  const [tooltipEl, setTooltipEl] = useState<HTMLElement>(null);
  const { styles, attributes } = usePopper(element, tooltipEl);

  return (
    <div>
      <Portal visible={visible}>
        <div
          ref={setTooltipEl}
          className={cnTooltip()}
          style={styles.popper}
          {...attributes.popper}
        >
          Test
        </div>
      </Portal>
    </div>
  );
};
