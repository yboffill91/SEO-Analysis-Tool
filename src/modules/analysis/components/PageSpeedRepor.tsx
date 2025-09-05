"use client";
import { useEffect } from "react";
import { Loading } from "@/modules/ui/molecules/Loading";
import { useURLStore } from "@/store/urlStore";
import { CircularProgress } from "@/modules/ui/athoms/circular-progress";
import { CardWrapper } from "@/modules/ui/molecules/CardWrapper";
import { usePageSpeedDesktopStore } from "@/store/pageSpeedStore";

export const PageSpeedRepor = () => {
  const url = useURLStore((state) => state.url) || "www.tamer.com";

  // --> Trayendo el store OMG

  const pageSpeedResponse = usePageSpeedDesktopStore(
    (state) => state.pageSpeedResponse
  );

  const loading = usePageSpeedDesktopStore((state) => state.loading);

  const error = usePageSpeedDesktopStore((state) => state.error);

  const setPageSpeedResponse = usePageSpeedDesktopStore(
    (state) => state.setPageSpeedResponse
  );
  // --> Esta es la forma correcta de traerlos

  const { signal } = new AbortController();
  useEffect(() => {
    if (!url) return;
    setPageSpeedResponse(url, signal);
    return () => {
      signal.aborted;
    };
  }, [url]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex-center gap-2 flex-wrap">
          {error && <p>An error occurred {error}</p>}
          {pageSpeedResponse && (
            <CardWrapper markableContent title="First Contentful Paint">
              <div className="flex-center flex-col gap-2">
                <CircularProgress
                  value={
                    pageSpeedResponse.lighthouseResult.audits[
                      "first-contentful-paint"
                    ].score ?? 0
                  }
                />

                <p>
                  {
                    pageSpeedResponse.lighthouseResult.audits[
                      "first-contentful-paint"
                    ].description
                  }
                </p>
              </div>
            </CardWrapper>
          )}
        </div>
      )}
    </>
  );
};
