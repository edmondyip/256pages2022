"use client"
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const fetchLayout = async () => {
	const { data, error } = useSWR("/api/layout", fetcher);
	return data;
};
