/**
 * Возвращает true, если DOM доступен
 * (нужно для того, чтобы детерминировать клиентский и серверный рендеринг)
 */
export const canUseDom = (): boolean =>
  typeof window !== 'undefined' &&
  typeof window.document !== 'undefined' &&
  typeof window.document.createElement !== 'undefined';
