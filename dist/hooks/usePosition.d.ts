import { RefObject } from 'react';
interface IUsePositionResult {
    top: number;
    left?: number;
    right?: number;
}
interface IUsePositionParameters {
    triggerRef: RefObject<HTMLElement>;
    positionX: 'left' | 'right';
    marginX: number;
    marginY: number;
}
export declare function usePosition({ triggerRef, positionX, marginX, marginY }: IUsePositionParameters): IUsePositionResult;
export {};
