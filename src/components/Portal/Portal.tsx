import React, {
  cloneElement,
  FC,
  forwardRef,
  ReactElement,
  ReactNode,
  RefObject,
  useEffect,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { canUseDom } from 'src/utils/dom';

const defaultParent = canUseDom() ? document.body : null;

interface IPortalProps {
  /**
   * Видимость портала
   */
  visible?: boolean;

  /**
   * Узел, в который монтируется портал
   *
   * @default document.body
   */
  parent?: RefObject<HTMLElement>;

  /**
   * Разметка для переноса
   */
  children: ReactElement;
}

/**
 * Компонент переносит фрагмент в другую часть DOM
 */
export const Portal = forwardRef<HTMLElement, IPortalProps>(
  ({ children, parent, visible = false }, ref) => {
    const [container, setContainer] =
      useState<HTMLElement | null>(defaultParent);

    useEffect(() => {
      if (parent) {
        setContainer(parent.current);
      }
    }, []);

    if (visible && container) {
      return createPortal(children, container);
    }

    return null;
  }
);

if (process.env.NODE_ENV !== 'production') {
  Portal.displayName = 'Portal';
}
