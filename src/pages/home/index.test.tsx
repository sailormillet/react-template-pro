import { render, screen } from "@testing-library/react";
import App from "./index";

test("renders learn react link", (): void => {
  render(<App />);
  const linkElement = screen.getByText(/hello,welcome to amy's shop/i);
  expect(linkElement).toBeInTheDocument();
});
