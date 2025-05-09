import { HttpStatusCode } from 'axios';
import { cookies } from 'next/headers';


const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

// add caching call, when you think of use-case
export const baseServerSideFetch = async<T>(endpoint: string, bodyParams?: { [key: string]: string }) => {
  if (endpoint.length === 0) {
    throw new Error("Endpoint is required");
  }
  try {
    const cookieStore = cookies();
    const cookieHeader = cookieStore.getAll()
      .map(cookie => `${cookie.name}=${cookie.value}`)
      .join('; ');
    const aCookie = cookieStore.getAll().find(cookie => cookie.name === 'auth');
    const data = await fetch(`${baseUrl}${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Cookie': cookieHeader,
        "Authorization": `${aCookie?.value}`
      },
      body: JSON.stringify(bodyParams),
      cache: 'no-store'
    });
    if (data.status === HttpStatusCode.Unauthorized) {
      return {err: new Error("Unauthorized"), data: null};
    }
    const json = await data.json()
    return {data: json.data as T, err: null}
  } catch (err) {
    return {data: null, err: err as Error}
  }
}