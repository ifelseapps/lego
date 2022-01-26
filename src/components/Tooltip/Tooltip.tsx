import React, { FC, ReactElement, ReactNode, useMemo, useRef, useState } from 'react';
import { IClassNameProps } from '@bem-react/core';
import debounce from 'lodash.debounce';
import { Overlay } from 'src/components/Overlay';
import { cnTooltip } from 'src/components/Tooltip/cn';

import './Tooltip.css';
import { IOverlayApi } from 'src/components/Overlay/Overlay';

const Content: FC = ({ children }) => (
  <>
    {children}
  </>
);

const Trigger: FC = ({ children }) => (
  <>
    {children}
  </>
);

type TooltipChild = ReactElement<
  { children: ReactNode },
  typeof Trigger | typeof Content
>;

export interface ITooltipProps extends IClassNameProps {
  children: TooltipChild[];
}

export const Tooltip: FC<ITooltipProps> & {
  Content: typeof Content;
  Trigger: typeof Trigger;
} = ({
  children,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const overlay = useRef<IOverlayApi>(null);
  const [shown, setShown] = useState(false);
  const cn = cnTooltip({ visible: shown }, [className]);

  const onMouseEnter = useMemo(() => debounce(() => {
    if (!shown) {
      overlay.current.update();
      setShown(true);
    }
  }, 20), [shown]);

  const onMouseLeave = useMemo(() => debounce(() => {
    if (shown) {
      setShown(false);
    }
  }, 20), [shown]);

  const content = (React.Children.toArray(children) as TooltipChild[])
    .find((child) => child.type === Content).props.children;

  const trigger = (React.Children.toArray(children) as TooltipChild[])
    .find((child) => child.type === Trigger).props.children;

  const cnTrigger = cnTooltip('trigger');

  return (
    <>
      <span className={cnTrigger} ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {trigger}
      </span>
      {/* TODO: positionX = right */}
      <Overlay ref={overlay} positionX="left" marginX={-10} marginY={-10} triggerRef={ref} className={cn}>
        <div>
          {content}
        </div>
      </Overlay>
    </>
  );
};

Tooltip.Trigger = Trigger;
Tooltip.Content = Content;
