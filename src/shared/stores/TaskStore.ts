import { create } from 'zustand';
/* shared */
import { Task } from '../models/Task.model';

type TaskState = {
  tasks: Task[];
  addTask: (newTask: Task) => void;
  removeTask: (taskId: number) => void;
  updateTask: (updatedTask: Task) => void;
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [
    {
      id: 1,
      taskName: 'Buy Books',
      description: 'make sure the Author is Ryan Holidays',
      highPriority: false,
      status: 0
    },
    {
      id: 2,
      taskName: 'Feed the dog',
      description: 'need to shower them first',
      highPriority: true,
      status: 1
    },
    {
      id: 3,
      taskName: 'Assignment Physics',
      description: 'deadline nextweek',
      highPriority: true,
      status: 0
    }
  ],
  addTask: (newTask: Task) => set((state) => ({tasks: [...state.tasks, newTask]})),
  removeTask: (taskId: number) => set((state) => ({tasks: state.tasks.filter((task) => task.id !== taskId)})),
  updateTask: (updatedTask: Task)=> set((state) => ({tasks: state.tasks.map((task) => task.id === updatedTask.id ? updatedTask : task)})),
}));
