import React, { FC, useEffect, useState } from 'react';
import { usePopper } from 'react-popper';
import { useOutsideClick } from 'src/hooks/useOutsideClick';
import { Portal } from 'src/components/Portal';
import { cnTooltip } from './cn';
import './tooltip.css';

export interface ITooltipProps {
  element: HTMLElement;
}

export const Tooltip: FC<ITooltipProps> = ({ element, children }) => {
  const [tooltipEl, setTooltipEl] = useState<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const { styles, attributes } = usePopper(element, tooltipEl);

  useOutsideClick([element, tooltipEl], () => setVisible(false));

  useEffect(() => {
    if (!element) {
      return;
    }

    const handler = () => {
      setVisible((value) => !value);
    };
    element.addEventListener('click', handler);

    return () => element.removeEventListener('click', handler);
  }, [element]);

  return (
    <Portal visible={visible}>
      <div
        ref={setTooltipEl}
        className={cnTooltip()}
        style={styles.popper}
        {...attributes.popper}
      >
        {children}
      </div>
    </Portal>
  );
};
