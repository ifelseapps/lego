import React, { ReactElement, RefObject } from 'react';
import { IClassNameProps } from '@bem-react/core';
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
export declare const Overlay: React.ForwardRefExoticComponent<IOverlayProps & React.RefAttributes<IOverlayApi>>;
export {};
