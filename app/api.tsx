import axios from "axios";
import useSWR, { SWRConfiguration } from "swr";
import { Book } from '../lib/types'

export const api = axios.create({
    baseURL: "http://localhost:3001", // Your mock server URL
});

// fetcher for SWR
const fetcher = (url: string) => api.get(url).then((res) => res.data);

export function useBooks() {
    const { data, error, isLoading, mutate } = useSWR("/books", fetcher);

    return {
        books: data,
        isLoading,
        isError: error,
        mutate,
    };
}