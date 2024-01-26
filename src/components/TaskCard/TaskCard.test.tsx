import { render, screen } from "@testing-library/react";

import { describe, expect, test } from "vitest";

import TaskCard from "../TaskCard/TaskCard";

const mockedTasks =
  {
    id: 1,
    taskName: "Buy Books",
    description: "make sure the Author is Ryan Holidays",
    highPriority: false,
    status: 0,
}

describe("TaskCard Component", () => {
  test("Show a task received by the parent.", async () => {
    render(<TaskCard task={mockedTasks} updateTask={() => {}}/>)

    const taskCard = screen.getAllByTestId("task-card");

    expect(taskCard).toHaveLength(1);
  });
});
