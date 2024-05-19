import { api } from "./index";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getProduts: build.query({
      query: () => ({
        url: "/comments",

      }),
      providesTags: ["comments"],   
    }),
    getSingleUser: build.query({
        query: (id) => ({
          url: `${id ? `/comments${id}` : ""}`,
          id,
        }),
        providesTags: ["comments"],
      }),
    deleteProduts: build.mutation({
      query: (id) => ({
        url: `/comments/${id}`,
        method: "DELETE"

      }),
      invalidatesTags:["comments"]
    }),
    postProduts: build.mutation({
      query: (body) => ({
        url: "/comments",
        method: "POST",
        body

      }),
      invalidatesTags:["comments"]
    }),
  }),
});
export const 
{ useGetProdutsQuery,
    usePostProdutsMutation,
    useDeleteProdutsMutation

 }
 = productApi;
