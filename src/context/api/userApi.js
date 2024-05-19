import { api } from ".";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getUsers: build.query({
      query: () => ({
        url: "/products",
      }),
      providesTags: ["product"],
    }),
    deleteUsers: build.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE"

      }),
      invalidatesTags:["product"]
    }),
    postUsers: build.mutation({
      query: (body) => ({
        url: "/products",
        method: "POST",
        body

      }),
      invalidatesTags:["product"]
    }),
  }),
});
export const 
{ useGetUsersQuery,
  useDeleteUsersMutation,
  usePostUsersMutation

 }
 = productApi;
