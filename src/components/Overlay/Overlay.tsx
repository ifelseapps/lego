import React, { cloneElement, FC, ReactElement, RefObject } from 'react';
import { usePosition } from 'src/hooks/usePosition';
import { isDomAvailable } from 'src/utils/dom';
import { createPortal } from 'react-dom';
import { IClassNameProps } from '@bem-react/core';

interface IOverlayProps extends IClassNameProps {
  children: ReactElement;
  triggerRef: RefObject<HTMLElement>;
  positionX: 'left' | 'right';
  marginX?: number;
  marginY?: number;
}

export const Overlay: FC<IOverlayProps> = ({
  children,
  className,
  triggerRef,
  positionX,
  marginX,
  marginY,
}) => {
  const position = usePosition({ triggerRef, positionX, marginX, marginY });

  if (!isDomAvailable() || !position) {
    return null;
  }

  return createPortal(
    cloneElement(children, { className, style: { ...position } }),
    document.body,
  );
};

Overlay.defaultProps = {
  marginX: 0,
  marginY: 0,
};
