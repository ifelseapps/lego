import { RefObject } from 'react';
declare type Result = [IPosition, () => void];
interface IPosition {
    top: number;
    left?: number;
}
interface IUsePositionParameters {
    triggerRef: RefObject<HTMLElement>;
    positionX: 'left' | 'right';
    marginX: number;
    marginY: number;
}
export declare function usePosition({ triggerRef, marginX, marginY }: IUsePositionParameters): Result;
export {};
