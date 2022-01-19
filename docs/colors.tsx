import { Meta } from '@storybook/react';
import { useCallback, useEffect, useState, MouseEvent, useRef, ChangeEvent } from 'react';

export default {
  title: 'Lego'
} as Meta;

export const Colors = () => {
  const [properties, setProperties] = useState<string[]>([]);
  const cache = useRef<string[]>([]);

  useEffect(() => {
    cache.current = getColorsFromCustomProperties();
    setProperties(cache.current);
  }, []);

  const filterHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim().toLowerCase();
    const filtered = cache.current.filter((prop) => prop.includes(value));
    setProperties(filtered);
  }, []);

  const clickHandler = useCallback((e: MouseEvent<HTMLElement>) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText((e.target as HTMLElement).dataset.snippet);
    }
  }, []);

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Введите название цвета"
          onChange={filterHandler}
        />
      </div>
      <table>
        {properties.map((prop) => (
          <tr key={prop}>
            <td>
              <button
                data-snippet={`var(${prop})`}
                className="color-preview"
                style={{ backgroundColor: `var(${prop})` }}
                onClick={clickHandler}
              />
            </td>
            <td>
              <div className="property-name">{prop}</div>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};

Colors.parameters = {
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true,
    },
  },
};

function getColorsFromCustomProperties() {
  const isCurrentDomain = (stylesheet: CSSStyleSheet) =>
    !stylesheet.href || stylesheet.href.indexOf(window.location.origin) === 0;

   const isStyleRule = (rule: CSSStyleRule) => rule.STYLE_RULE === 1;

   const isRootSelector = (rule: CSSStyleRule) => (rule.selectorText || '').startsWith(':root');

   const isColorProp = (prop: string) => prop.startsWith('--color-');

  return Array.from(document.styleSheets)
    .filter(isCurrentDomain)
    .reduce<string[]>((acc, stylesheet) => {
      const rules = Array.from(stylesheet.cssRules)
        .filter((rule: CSSStyleRule) => isStyleRule(rule) && isRootSelector(rule));

      const properties = rules.reduce((allDeclarations: string[], rule: CSSStyleRule) => [
        ...allDeclarations,
        ...Array.from(rule.style)
          .filter(isColorProp)
          .map((prop) => prop.trim()),
      ], []);

      if (properties.length) {
        return [...acc, ...properties];
      }

      return acc;
    }, []);
}
