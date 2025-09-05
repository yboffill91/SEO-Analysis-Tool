"use client";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/modules/ui/athoms";
import { Monitor, Smartphone, TriangleAlert } from "lucide-react";
import { ReportPage } from "./components/PageReport";

import { usePageSpeedStore } from "@/store/pageSpeedStore";
import { MainSkeleton } from "./components/MainSkeleton";
import { useEffect } from "react";
import { useURLStore } from "@/store/urlStore";

const PageSpeedReport = () => {
  const loading = usePageSpeedStore((state) => state.loading);
  const fetchData = usePageSpeedStore((state) => state.fetchPageSpeedAll);
  const error = usePageSpeedStore((state) => state.error);
  const url = useURLStore((state) => state.url);

  useEffect(() => {
    const { signal } = new AbortController();
    fetchData(url, signal);
    return () => {
      signal.aborted;
    };
  }, [url, fetchData]);

  return (
    <>
      {loading ? (
        <MainSkeleton />
      ) : error ? (
        <div className="container max-w-sm p-1 flex-center mx-auto">
          <Alert variant={"destructive"}>
            <AlertTitle>
              <TriangleAlert />
              <h2>An Error has occurred1</h2>
            </AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        </div>
      ) : (
        <>
          <Tabs defaultValue="mobile" className="w-full flex-center flex-col">
            <TabsList className="w-full flex-center max-w-sm">
              <TabsTrigger value="mobile">
                <Smartphone />
                Mobile
              </TabsTrigger>
              <TabsTrigger value="desktop">
                <Monitor />
                Desktop
              </TabsTrigger>
            </TabsList>
            <TabsContent value="mobile">
              <ReportPage dataOrigin="mobile" />
            </TabsContent>
            <TabsContent value="desktop">
              <ReportPage dataOrigin="desktop" />
            </TabsContent>
          </Tabs>
        </>
      )}
    </>
  );
};

export default PageSpeedReport;
