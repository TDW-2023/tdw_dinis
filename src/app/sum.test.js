import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import TesteJest from "./test_page";

// const sum = require('./sum');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

// test('Verifica a existência do texto "Olá, mundo!" no DOM', () => {

//   const { getByText } = render(<TesteJest />);

//   const textoNoDOM = getByText('Olá, mundo!');

//   expect(textoNoDOM).toBeInTheDocument();  });

test('Verifica a existência do texto "Olá, mundo!" no DOM', async () => {
  render(<TesteJest></TesteJest>);

  expect(screen.getByText("Olá, mundo!")).toBeInTheDocument();
});
