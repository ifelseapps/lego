import { useEffect } from 'react';

export function useOutsideClick(exceptionElements: HTMLElement[], cb: (e: MouseEvent) => void) {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const isExceptionClick = exceptionElements
        .some((el) => el && el.contains(e.target as HTMLElement));

      if (!isExceptionClick) {
        cb(e);
      }
    };

    // TODO: подумать на какие события следует подписаться
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [exceptionElements, cb]);
}
