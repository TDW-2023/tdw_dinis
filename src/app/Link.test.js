import React from 'react';
import renderer from 'react-test-renderer';
import MeuComponente from './test_page';

test('snapshot para  o Componente de teste', () => {
  const component = renderer.create(<MeuComponente />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

