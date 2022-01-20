import React from 'react';
import { render } from 'enzyme';
import { Button } from 'src/components/Button/Button';
import { expect } from '@jest/globals';

describe('<Button/>', () => {
  it('должен выводиться текст', () => {
    const component = render(<Button/>);
    expect(component.text()).toBe('Click me!');
  });
});
