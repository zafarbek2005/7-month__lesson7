import { api } from "./index";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => ({
        url: "/products",
      }),
      providesTags: ["product"],
    }),

    detailsUsers: build.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),

    deleteUsers: build.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),

    postUsers: build.mutation({
      query: (body) => ({
        url: "/products",
        method: "POST",
        body,
      }),
      invalidatesTags: ["product"],
    }),

    putUsers: build.mutation({
      query: ({ body, id }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useDeleteUsersMutation,
  usePostUsersMutation,
  usePutUsersMutation,
  useDetailsUsersQuery,
} = productApi;
