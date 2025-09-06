import { CardWrapper } from "@/modules/ui/molecules/CardWrapper";
import { usePageSpeedStore } from "@/store/pageSpeedStore";
import { cn } from "@/lib/utils";
import { ReportHeader } from "./ReportHeader";
import { Separator } from "@/modules/ui/athoms";
import { AuditsList } from "./AuditList";
import Image from "next/image";
import { Calendar, Clock, Link } from "lucide-react";
import { InfoPanel } from "./InfoPanel";

interface Props {
  dataOrigin: "mobile" | "desktop";
}

export const ReportPage = ({ dataOrigin }: Props) => {
  const returnedData =
    dataOrigin === "mobile"
      ? usePageSpeedStore((state) => state.data.mobile)
      : usePageSpeedStore((state) => state.data.desktop);

  const performanceScore =
    returnedData.response?.lighthouseResult?.categories?.performance?.score ??
    0;
  const bestPracticesScore =
    returnedData.response?.lighthouseResult?.categories["best-practices"]
      ?.score ?? 0;
  const accessibilityScore =
    returnedData.response?.lighthouseResult?.categories?.accessibility?.score ??
    0;
  const seoScore =
    returnedData.response?.lighthouseResult?.categories?.seo?.score ?? 0;

  const avgScore =
    (performanceScore + bestPracticesScore + accessibilityScore + seoScore) / 4;

  const screenShoot =
    returnedData.response?.lighthouseResult?.audits["final-screenshot"]?.details
      ?.data;

  const performanceMetrics = Object.values(returnedData.categories.performance);
  const bestPracticesMetrics = Object.values(
    returnedData.categories.bestPractices
  );
  const seoMetrics = Object.values(returnedData.categories.seo);
  const accessibilityMetrics = Object.values(
    returnedData.categories.accessibility
  );

  const screenShoots =
    returnedData.response?.lighthouseResult?.audits["screenshot-thumbnails"]
      ?.details?.items;
  console.log(returnedData.response);

  const auditTimeStamp = new Date(
    returnedData.response?.analysisUTCTimestamp ?? new Date()
  );

  const requestedUrl =
    returnedData.response?.lighthouseResult?.requestedUrl ?? "";

  const timing = (
    (returnedData.response?.lighthouseResult?.timing?.total ?? 1) / 1000
  ).toFixed(2);

  const warnings = returnedData.response?.lighthouseResult?.runWarnings ?? [];
  return (
    <div className="min-h-96  flex-center flex-col gap-8 container mx-auto">
      <CardWrapper title="Speed Insight" className={cn("w-full relative")}>
        <span
          className={cn(
            "absolute top-0 inset-0 left-0 w-full h-96 bg-gradient-to-b rounded-t-lg",
            avgScore <= 0.49
              ? "from-destructive/5 via-transparent to-transparent "
              : avgScore > 0.49 && avgScore <= 0.89
              ? "from-warning/5 via-transparent to-transparent "
              : "from-success/5 via-transparent to-transparent "
          )}
        />
        <ReportHeader
          avgScore={avgScore}
          performanceScore={performanceScore}
          bestPracticesScore={bestPracticesScore}
          accessibilityScore={accessibilityScore}
          seoScore={seoScore}
          screenShoot={screenShoot}
        />
        <div className="bg-accent/5 text-accent-foreground w-full p-6 grid lg:grid-cols-3 md:grid-cols-2 gap-4 rounded-t-lg">
          <InfoPanel
            label="Audit Date"
            icon={Calendar}
            value={auditTimeStamp.toLocaleDateString()}
          />
          <InfoPanel label="Requested URL" icon={Link} value={requestedUrl} />
          <InfoPanel label="Responsed Timing" icon={Clock} value={timing} />
        </div>
        {warnings?.length > 0 && (
          <div className="p-4 flex items-start justify-start flex-col bg-warning/10 text-warning gap-4">
            {warnings.map((warning, index) => (
              <p key={index}>{warning}</p>
            ))}
          </div>
        )}
        <Separator />
        <CardWrapper
          className="border-0 bg-transparent shadow-none"
          title={"Metrics"}
        >
          <CardWrapper title="Core Web Vitals" className="my-4">
            <div className="w-full h-64 rounded-lg grid grid-cols-8 overflow-auto">
              {screenShoots.map((screen: { data: string }, index: number) => (
                <div className="relative " key={index}>
                  <Image
                    src={screen.data}
                    alt="Screenshot"
                    width={100}
                    height={100}
                    className={cn(
                      "h-64 w-full object-cover object-center shadow-lg",
                      index === 0 && "rounded-s-lg",
                      index === screenShoots.length - 1 && "rounded-e-lg"
                    )}
                    unoptimized
                  />
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-lg text-primary-foreground rounded-full size-6 flex-center">
                    {index + 1}
                  </span>
                  <span className="absolute top-0 left-0 w-full h-full  bg-gradient-to-b from-card  to-card/5 "></span>
                </div>
              ))}
            </div>

            <div className="w-full grid lg:grid-cols-2 gap-4">
              {performanceMetrics.map((audit) => {
                return <AuditsList audit={audit} key={audit.id} />;
              })}
            </div>
          </CardWrapper>
          <CardWrapper title="Best Practices" className="my-4">
            <div className="w-full grid lg:grid-cols-2 gap-4">
              {bestPracticesMetrics.map((audit) => {
                return <AuditsList audit={audit} key={audit.id} />;
              })}
            </div>
          </CardWrapper>
          <CardWrapper title="SEO" className="my-4">
            <div className="w-full grid lg:grid-cols-2 gap-4">
              {seoMetrics.map((audit) => {
                return <AuditsList audit={audit} key={audit.id} />;
              })}
            </div>
          </CardWrapper>
          <CardWrapper title="Accessibility" className="my-4">
            <div className="w-full grid lg:grid-cols-2 gap-4">
              {accessibilityMetrics.map((audit) => {
                return <AuditsList audit={audit} key={audit.id} />;
              })}
            </div>
          </CardWrapper>
        </CardWrapper>
      </CardWrapper>
    </div>
  );
};
