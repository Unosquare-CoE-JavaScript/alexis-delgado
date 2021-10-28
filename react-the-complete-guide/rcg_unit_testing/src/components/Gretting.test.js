import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("renders Hello World as a text", () => {
  //arrange -> organizar, preparar
  render(<Greeting />);

  //act -> actuar/ejecutar

  //assert -> afirmar/ asegurar
  const helloWorldElement = screen.getByText("Hello World", { exact: false });
  expect(helloWorldElement).toBeInTheDocument();
});
