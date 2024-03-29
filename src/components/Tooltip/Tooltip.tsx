import React, { FC, useEffect, useState } from 'react';
import { usePopper } from 'react-popper';
import { useOutsideClick } from 'src/hooks/useOutsideClick';
import { Portal } from 'src/components/Portal';
import { cnTooltip } from './cn';
import './tooltip.css';

export interface ITooltipProps {
  element: HTMLElement;
  trigger: 'hover' | 'click';
}

const cnArrow = cnTooltip('arrow');

export const Tooltip: FC<ITooltipProps> = ({ element, trigger, children }) => {
  const [arrowEl, setArrowEl] = useState<HTMLElement>(null);
  const [tooltipEl, setTooltipEl] = useState<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const { styles, attributes } = usePopper(element, tooltipEl, {
    placement: 'auto',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 10],
        },
      },
      {
        name: 'arrow',
        options: {
          element: arrowEl,
        },
      },
      {
        name: 'flip',
        options: {
          fallbackPlacements: ['top', 'right'],
        },
      },
    ],
  });

  useOutsideClick([element, tooltipEl], () => setVisible(false));

  useEffect(() => {
    if (!element) {
      return;
    }

    const handler = () => {
      setVisible((value) => !value);
    };
    // TODO: подумать над событиями
    if (trigger === 'click') {
      element.addEventListener('click', handler);
    } else {
      element.addEventListener('mouseenter', handler);
      element.addEventListener('mouseleave', handler);
    }

    return () => {
      element.removeEventListener('click', handler);
      element.removeEventListener('mouseenter', handler);
      element.removeEventListener('mouseleave', handler);
    }
  }, [element, trigger]);

  return (
    <Portal visible={visible}>
      <div
        ref={setTooltipEl}
        className={cnTooltip()}
        style={styles.popper}
        {...attributes.popper}
      >
        <div className={cnArrow} ref={setArrowEl} style={styles.arrow} {...attributes.arrow} />
        {children}
      </div>
    </Portal>
  );
};
