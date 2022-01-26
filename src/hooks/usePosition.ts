import { RefObject, useCallback, useEffect, useState } from 'react';

type Result = [IPosition, () => void];

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

export function usePosition({ triggerRef, marginX = 0, marginY = 0 }: IUsePositionParameters): Result {
  const [result, setResult] = useState<IPosition>(null);

  const update = useCallback(
    () => {
      const coords = triggerRef.current.getBoundingClientRect();
      setResult({
        top: Math.floor(coords.top + marginY),
        left: Math.floor(coords.left + marginX),
      });
    },
    [marginX, marginY, triggerRef],
  );

  useEffect(() => update(), [update]);

  return [result, update];
}
