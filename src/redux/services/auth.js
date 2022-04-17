import {CONFIG} from '@/constants';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

//users related api
export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: CONFIG.APIBASEURL,
  }),

  endpoints: builder => ({
    signIn: builder.mutation({
      query: body => {
        return {
          url: `/authaccount/login`,
          method: 'POST',
          body,
          responseHandler: async response => {
            const data = await response.json();
            const headers = response.headers;
            return {data, headers};
          },
        };
      },
    }),

    signUp: builder.mutation({
      query: body => {
        return {
          url: `/authaccount/registration`,
          method: 'POST',
          body,
          responseHandler: async response => {
            const data = await response.json();
            const headers = response.headers;
            return {data, headers};
          },
        };
      },
    }),
  }),
});

export const {useSignInMutation, useSignUpMutation} = authAPI;
