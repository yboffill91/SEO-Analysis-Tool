"use client";
import React from "react";
import { useFetchPageSpeed } from "../hooks/useFetchPageSpeed";
import { Loading } from "@/modules/ui/molecules/Loading";
import { useURLStore } from "@/store/urlStore";

export const PageSpeedRepor = () => {
  const url = useURLStore((state) => state.url) || "www.tamer.com";
  const { pageSpeedData, error, loading } = useFetchPageSpeed({ url });
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {error &&
            (typeof error === "string"
              ? error
              : error instanceof Error
              ? error.message
              : "An unknown error occurred")}
          {pageSpeedData && (
            <div className="flex-center  gap-2 ">
              <span className="px-4 py-1 rounded-full bg-primary/10 text-pretty text-primary">
                {pageSpeedData.kind}
              </span>
            </div>
          )}
        </div>
      )}
    </>
  );
};
