import { IBook } from "../../../types/globalTypes";
import { api } from "../../api/apiSlice";

export type FetchBaseQueryError = {
  status: number;
  data: {
    message: string | undefined;
    error: string; // Adjust the structure to match your API's error format
  };
};

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addNewProduct: builder.mutation({
      query: (payload) => ({
        url: "/product",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
    }),
    getProducts: builder.query<IBook[], void>({
      query: () => "/products",
    }),
    singleProduct: builder.query({
      query: (id: string) => `/product/${id}`,
    }),
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/comment/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comments"],
    }),

    getComment: builder.query({
      query: (id) => `/comment/${id}`,
      providesTags: ["comments"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCommentQuery,
  useSingleProductQuery,
  usePostCommentMutation,
  useAddNewProductMutation,
  useDeleteProductMutation,
} = productApi;
