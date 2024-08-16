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
  }),
});

export const { useGetAllWorkoutsMutation } = workoutsApiSlice;
