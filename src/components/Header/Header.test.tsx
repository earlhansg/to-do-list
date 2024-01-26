import { render, screen } from "@testing-library/react";

import { describe, expect, test } from "vitest";

import Header from "./Header";

describe("Header Component", () => {
  test("should render the component with header text", async () => {
    render(<Header />);
    expect(screen.getByText(/To-do list/i)).toBeInTheDocument();
  });
});
