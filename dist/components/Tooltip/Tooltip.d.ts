import { FC, ReactElement } from 'react';
import { IClassNameProps } from '@bem-react/core';
import './Tooltip.css';
export interface ITooltipProps extends IClassNameProps {
    render(): ReactElement;
}
export declare const Tooltip: FC<ITooltipProps>;
