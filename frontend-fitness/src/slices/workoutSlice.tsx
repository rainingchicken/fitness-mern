import { apiSlice } from "./apiSlice.tsx";

interface IcreateWorkout {
  title: string;
  reps: number;
  sets: number;
}

export const workoutsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllWorkouts: builder.mutation({
      query: () => ({
        url: `/api/workouts`,
        method: "GET",
      }),
    }),
    createWorkout: builder.mutation({
      query: (data: IcreateWorkout) => ({
        url: `/api/workouts`,
        method: "POST",
        body: data,
      }),
    }),
    deleteWorkout: builder.mutation({
      query: (data) => ({
        url: `/api/workouts/${data}`,
        method: "DELETE",
        body: data,
      }),
    }),
    updateWorkout: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/workouts/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllWorkoutsMutation,
  useCreateWorkoutMutation,
  useDeleteWorkoutMutation,
  useUpdateWorkoutMutation,
} = workoutsApiSlice;
