import { FC, ReactElement, ReactNode } from 'react';
import { IClassNameProps } from '@bem-react/core';
import './Tooltip.css';
declare const Content: FC;
declare const Trigger: FC;
declare type TooltipChild = ReactElement<{
    children: ReactNode;
}, typeof Trigger | typeof Content>;
export interface ITooltipProps extends IClassNameProps {
    children: TooltipChild[];
}
export declare const Tooltip: FC<ITooltipProps> & {
    Content: typeof Content;
    Trigger: typeof Trigger;
};
export {};
