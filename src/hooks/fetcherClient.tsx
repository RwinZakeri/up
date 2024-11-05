"use client";
import { useEffect, useState } from "react";

interface UseFetcherClientProps {
  url: string;
  sliceCount?: number;
}

const useFetcherClient = ({ url, sliceCount }: UseFetcherClientProps) => {
  const [data, setData] = useState<object[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<{
    error: boolean;
    message: string;
  } | null>({ error: false, message: "" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(url);
        const result = await res.json();

        // Set the data, optionally slicing it if sliceCount is provided
        setData(sliceCount ? result.slice(0, sliceCount) : result);
        setIsLoading(false);
      } catch (error: any) {
        setIsLoading(false);
        setIsError({ error: true, message: error.message });
      }
    };

    fetchData();
  }, [url, sliceCount]);

  return [data, isLoading, isError];
};

export default useFetcherClient;
