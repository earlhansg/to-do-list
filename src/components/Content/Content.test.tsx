import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { describe, expect, test } from "vitest";

import Content from "./Content";

describe("Counter Component", () => {
  test('should render with initial value of 2 in "ALL TASKS" tab', async () => {
    render(<Content />);

    const taskCardElements = screen.getAllByTestId("task-card");
    expect(taskCardElements).toHaveLength(2);
  });
  test('should able to click "Completed" tab', async () => {
    const user = userEvent.setup();
    render(<Content />);
    await act(async () => {
      const completedTab = await screen.getByTestId("completed");
      await user.click(completedTab);
    });
  });
});
