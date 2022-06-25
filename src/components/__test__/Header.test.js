import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  test("If header appears on page", () => {
    render(<Header />);
    const headingElement = screen.getByText(/Recently Added Thought/i);
    expect(headingElement).toBeInTheDocument();
  });
});

describe("Add A Thought Container", () => {
  test("If the add a thought container appears", () => {
    render(<Header />);
    const addThoughtElement = screen.getByText("+");
    expect(addThoughtElement).toBeInTheDocument();
  });
});

describe("Add A Thought Caption", () => {
  test("If the add a thought caption", () => {
    render(<Header />);
    const addThoughtCaptionElement = screen.getByText("Add a Thought");
    expect(addThoughtCaptionElement).toBeInTheDocument();
  });
});

describe("Initial thought", () => {
  test("If thoughts appears on page", () => {
    render(<Header />);
    const thoughtElement = screen.getAllByText(
      /Initial Thought: I Love Myself/i
    );
    expect(thoughtElement[0]).toBeInTheDocument();
  });
});

describe("Number of Thoughts", () => {
  test("If thoughts appears on page", () => {
    render(<Header />);
    const thoughtElement = screen.getAllByText(
      /Initial Thought: I Love Myself/i
    );
    expect(thoughtElement.length).toBe(4);
  });
});
