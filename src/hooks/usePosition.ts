import { RefObject, useEffect, useState } from 'react';

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

export function usePosition({ triggerRef, positionX = 'left', marginX = 0, marginY = 0 }: IUsePositionParameters): IUsePositionResult {
  const [result, setResult] = useState<IUsePositionResult>(null);

  useEffect(() => {
    const coords = triggerRef.current.getBoundingClientRect();

    setResult({
      top: Math.floor(coords.top + marginY),
      left: Math.floor(coords.left + marginX),
    });
  }, [marginX, marginY, positionX, triggerRef]);

  return result;
}
