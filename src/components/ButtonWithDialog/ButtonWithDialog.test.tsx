import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { describe, expect, test } from "vitest";

import { ForwardedButtonWithDialog } from "./ButtonWithDialog";

describe("ButtonWithDialog Component", () => {
  test("button should be present in the DOM", async () => {
    render(<ForwardedButtonWithDialog />);

    const buttonElements = screen.getByTestId("add-button");
    expect(buttonElements).toBeInTheDocument();
  });
  test("button click the task form modal will appear", async () => {
    const user = userEvent.setup();
    render(<ForwardedButtonWithDialog />);
    await act(async () => {
      const addButton = await screen.getByTestId("add-button");
      await user.click(addButton);
    });
    const taskFomrElements = screen.getByTestId("task-form");
    expect(taskFomrElements).toBeInTheDocument();
  });
});
