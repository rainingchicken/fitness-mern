import { apiSlice } from "./apiSlice";
const WORKOUT_URL = import.meta.env.VITE_WORKOUT_URL;

export const workoutsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllWorkouts: builder.mutation({
      query: () => ({
        url: `${WORKOUT_URL}`,
        method: "GET",
      }),
    }),
    createWorkout: builder.mutation({
      query: (data) => ({
        url: `${WORKOUT_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    deleteWorkout: builder.mutation({
      query: (data) => ({
        url: `${WORKOUT_URL}/${data}`,
        method: "DELETE",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllWorkoutsMutation,
  useCreateWorkoutMutation,
  useDeleteWorkoutMutation,
} = workoutsApiSlice;
