import React, { FC, ReactElement, useMemo, useRef, useState } from 'react';
import { IClassNameProps } from '@bem-react/core';
import debounce from 'lodash.debounce';
import { Overlay } from 'src/components/Overlay';
import { cnTooltip } from 'src/components/Tooltip/cn';

import './Tooltip.css';

export interface ITooltipProps extends IClassNameProps {
  render(): ReactElement;
}

export const Tooltip: FC<ITooltipProps> = ({
  children,
  className,
  render,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  const cn = cnTooltip({ visible: shown }, [className]);

  const onMouseEnter = useMemo(() => debounce(() => {
    if (!shown) {
      setShown(true);
    }
  }, 20), [shown]);

  const onMouseLeave = useMemo(() => debounce(() => {
    if (shown) {
      setShown(false);
    }
  }, 20), [shown]);

  return (
    <>
      <span ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {children}
      </span>
      {/* TODO: positionX = right */}
      <Overlay positionX="left" marginX={-10} marginY={-10} triggerRef={ref} className={cn}>
        {render()}
      </Overlay>
    </>
  );
};
