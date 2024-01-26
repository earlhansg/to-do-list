import { Alert } from "@mui/material";

import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { describe, expect, test } from "vitest";

import MenuTabs from "./MenuTabs";
import TaskCard from "../TaskCard/TaskCard";

const MockComponent = () => {
  const tasks = [
    {
      id: 1,
      taskName: "Buy Books",
      description: "make sure the Author is Ryan Holidays",
      highPriority: false,
      status: 0,
    },
    {
      id: 2,
      taskName: "Feed the dog",
      description: "need to shower them first",
      highPriority: true,
      status: 1,
    },
    {
      id: 3,
      taskName: "Assignment Physics",
      description: "deadline nextweek",
      highPriority: true,
      status: 0,
    },
  ];

  render(
    <MenuTabs>
      {(menuTabId) => {
        const filteredTasks = tasks.filter((task) => task.status === menuTabId);

        return filteredTasks.length !== 0 ? (
          filteredTasks.map((task) => (
            <TaskCard key={task.id} task={task} updateTask={() => {}} />
          ))
        ) : (
          <Alert severity="info" sx={{ mt: 2 }}>
            At this point in time, there is no data added.
          </Alert>
        );
      }}
    </MenuTabs>
  );
};

describe("Menu Component", () => {
  test("The CHIP number must match on the task cards displayed.", async () => {
    const user = userEvent.setup();
    MockComponent();
    await act(async () => {
      const completedTab = await screen.getByTestId("completed");
      await user.click(completedTab);
    });
    const taskCardCompletedElements = screen.getAllByTestId("task-card");

    expect(taskCardCompletedElements).toHaveLength(1);

    await act(async () => {
      const allTaskTab = await screen.getByTestId("all-task");
      await user.click(allTaskTab);
    });

    const allTaskCardElements = screen.getAllByTestId("task-card");
    expect(allTaskCardElements).toHaveLength(2);
  });
});
