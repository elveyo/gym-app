import create from "zustand";

export const exerciseState = create((set) => ({
  exercise: {},
  exercises: [],
  refreshExercises: (array) =>
    set((state) => ({
      ...state,
      exercises: array,
    })),
  increment: () => set((state) => ({ ...state, number: state.number + 1 })),
}));
