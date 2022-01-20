import { FC, ReactElement, RefObject } from 'react';
import { IClassNameProps } from '@bem-react/core';
interface IOverlayProps extends IClassNameProps {
    children: ReactElement;
    triggerRef: RefObject<HTMLElement>;
    positionX: 'left' | 'right';
    marginX?: number;
    marginY?: number;
}
export declare const Overlay: FC<IOverlayProps>;
export {};
