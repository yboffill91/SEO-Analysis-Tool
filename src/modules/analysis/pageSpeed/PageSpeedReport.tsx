"use client";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Separator,
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
import { useRouter } from "next/navigation";
import { HomeForm } from "@/modules/home/components/HomeForm";
import { CardWrapper } from "@/modules/ui/molecules/CardWrapper";

const PageSpeedReport = () => {
  const loading = usePageSpeedStore((state) => state.loading);
  const fetchData = usePageSpeedStore((state) => state.fetchPageSpeedAll);
  const error = usePageSpeedStore((state) => state.error);
  const url = useURLStore((state) => state.url);
  const router = useRouter();

  useEffect(() => {
    if (!url) {
      router.push("/");
    }
    const { signal } = new AbortController();
    fetchData(url!, signal);
    return () => {
      signal.aborted;
    };
  }, [url, fetchData]);

  return (
    <>
      {loading ? (
        <MainSkeleton />
      ) : error ? (
        <div className="container max-w-sm p-1 flex-center mx-auto flex-col gap-8">
          <Alert variant={"destructive"}>
            <AlertTitle>
              <TriangleAlert />
              <h2>An Error has occurred!</h2>
            </AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
          <Separator />
          <CardWrapper title="Try Again" className="w-full">
            <HomeForm />
          </CardWrapper>
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
