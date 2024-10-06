import axios, { AxiosError, AxiosResponse } from "axios";
// import { cookies } from "next/headers";

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const HTTP_METHOD = {
  GET: "GET",
  POST: "POST",
  PATCH: "PATCH",
  DELETE: "DELETE",
};

export const callApi = async (url: string, body: any, method = HTTP_METHOD.POST) => {
  try {
    const { data }: AxiosResponse = await axios(`${baseUrl}${url}`,
      {
        headers: {
          "Content-Type": "application/json",
          // "Authorization": `Bearer ${cookies().get("auth")}`,
        }, method, data: body,
        withCredentials: true,
      });
    return {data, err: null};
  } catch (err) {
    return {data: null, err: (err as AxiosError).response}
  }
};

