import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const baseQuery = fetchBaseQuery({ baseUrl: VITE_API_BASE_URL });
// const baseQuery = fetchBaseQuery({ baseUrl: "" });
export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Workout", "User"],
  endpoints: () => ({}),
});
