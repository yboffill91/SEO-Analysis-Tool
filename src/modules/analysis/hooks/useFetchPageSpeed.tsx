"use client";
import { useEffect, useState } from "react";
import { PageSpeedResponse } from "../models";
import { fetchPageSpeed } from "@/services/fetchPageSpeed";

interface Props {
  url: string;
}
export const useFetchPageSpeed = ({ url }: Props) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | string | null>(null);
  const [pageSpeedData, setPageSpeedData] = useState<PageSpeedResponse | null>(
    null
  );

  const { signal } = new AbortController();

  const getPageSpeed = async () => {
    try {
      const response = await fetchPageSpeed(url, signal);
      setPageSpeedData(response);
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      } else {
        setError(`An Error has happen ${error}`);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPageSpeed();

    return () => {
      signal.aborted;
    };
  }, [url]);

  return {
    loading,
    error,
    pageSpeedData,
  };
};
