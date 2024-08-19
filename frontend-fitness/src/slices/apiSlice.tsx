import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "" });
export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Workout", "User"],
  endpoints: () => ({}),
});
