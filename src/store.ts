import { create } from "zustand";

const store = (set: any) => ({
 task: [
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
 ]
});

export const useStore =  create(store);