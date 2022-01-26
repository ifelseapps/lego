import React, { cloneElement, FC, forwardRef, ReactElement, RefObject, useImperativeHandle } from 'react';
import { usePosition } from 'src/hooks/usePosition';
import { isDomAvailable } from 'src/utils/dom';
import { createPortal } from 'react-dom';
import { IClassNameProps } from '@bem-react/core';
import { classnames } from '@bem-react/classnames';

export interface IOverlayApi {
  update(): void;
}

interface IOverlayProps extends IClassNameProps {
  children: ReactElement;
  triggerRef: RefObject<HTMLElement>;
  positionX: 'left' | 'right';
  marginX?: number;
  marginY?: number;
}

export const Overlay = forwardRef<IOverlayApi, IOverlayProps>(({
  children,
  className,
  triggerRef,
  positionX,
  marginX,
  marginY,
}, ref) => {
  const [position, update] = usePosition({ triggerRef, positionX, marginX, marginY });

  useImperativeHandle(ref, () => ({ update }));

  if (!isDomAvailable() || !position) {
    return null;
  }

  return createPortal(
    cloneElement(
      children,
      {
        ...children.props,
        className: classnames(children.props.className, className),
        style: { ...children.props.style, ...position },
      },
    ),
    document.body,
  );
});

Overlay.defaultProps = {
  marginX: 0,
  marginY: 0,
};
