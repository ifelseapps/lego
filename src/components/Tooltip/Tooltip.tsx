import React, { FC, useEffect, useRef, useState } from 'react';
import { IClassNameProps } from '@bem-react/core';
import { cnTooltip } from 'src/components/Tooltip/cn';

import './Tooltip.css';
import { createPortal } from 'react-dom';

export interface ITooltipProps extends IClassNameProps {}

export const Tooltip: FC<ITooltipProps> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  const [position, setPosition] = useState<any>(null);

  useEffect(
    () => {
      console.log('__HELLO__', ref.current.getBoundingClientRect());
      setPosition(ref.current.getBoundingClientRect());
    },
    []
  );

  const renderTooltip = () => {
    if (!position) {
      return null;
    }
    return createPortal(
      <div
        className={cnTooltip({ visible: shown }, [className])}
        style={{ top: position.top + position.height, left: position.left }}
      >
        Some inner text
      </div>,
      document.body
    );
  };

  return (
    <>
      <span
        ref={ref}
        onMouseEnter={() => setShown(true)}
        onMouseLeave={() => setShown(false)}
      >
        {children}
      </span>
      {renderTooltip()}
    </>
  );
};
