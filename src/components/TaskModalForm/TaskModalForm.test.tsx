import { render, screen } from "@testing-library/react";

import { describe, expect, test } from "vitest";

import TaskCard from "../TaskCard/TaskCard";
import TaskModalForm from "./TaskModalForm";
import { Action } from "../../shared/enums/Action.enum";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

const mockedTask = {
  id: 1,
  taskName: "Buy Books",
  description: "make sure the Author is Ryan Holidays",
  highPriority: false,
  status: 0,
};

describe("Render TaskCard Component for Add", () => {
  const renderTaskModalForm = () => {
    render(
      <TaskModalForm
        isOpen={true}
        actionType={{ action: Action.add }}
        setIsOpen={() => true}
        toUpdateTask={null}
      />
    );
  };

  test("Modal Task Form Display", async () => {
    renderTaskModalForm();

    await act(async () => {
      const taskFormModal = screen.getByTestId("task-form");
      expect(taskFormModal).toBeInTheDocument();
    });
  });

  test("Title should be 'Add Task'", async () => {
    renderTaskModalForm();

    await act(async () => {
      const taskFormModal = screen.getByTestId("task-form");
      expect(taskFormModal).toBeInTheDocument();
    });
  });

  test("Button 'Add Task' should be present", async () => {
    renderTaskModalForm();

    await act(async () => {
      const formHeaderTitle = screen.getByTestId("form-header");
      expect(formHeaderTitle).toBeInTheDocument();
    });
  });

    test("Validation should appear when you click 'Add Task' and the TaskName input is blank.", async () => {
        const user = userEvent.setup();
        renderTaskModalForm();

        await act(async () => {
         const addTaskButton = screen.getByTestId("add-task");
          await user.click(addTaskButton);
          const errorMessageElement = screen.getByTestId("error-message")
          expect(errorMessageElement).toBeInTheDocument();
        });
    });
});

describe("Render TaskCard Component for Update", () => {
    const renderTaskModalForm = () => {
      render(
        <TaskModalForm
          isOpen={true}
          actionType={{ action: Action.update }}
          setIsOpen={() => true}
          toUpdateTask={mockedTask}
        />
      );
    };
  
    test("Modal Task Form Display", async () => {
      renderTaskModalForm();
  
      await act(async () => {
        const taskFormModal = screen.getByTestId("task-form");
        expect(taskFormModal).toBeInTheDocument();
      });
    });
  
    test("Button 'Update Task' should be present", async () => {
      renderTaskModalForm();
  
      await act(async () => {
        const addTaskButton = screen.getByTestId("update-task");
        expect(addTaskButton).toBeInTheDocument();
      });
    });

    test("Button 'Delete Task' should be present", async () => {
        renderTaskModalForm();
    
        await act(async () => {
          const addTaskButton = screen.getByTestId("delete-task");
          expect(addTaskButton).toBeInTheDocument();
        });
    });
  });
