"use client";
import data from "@/helpers/sampleResponse.json" assert { type: "json" };
import { CircularProgress } from "@/modules/ui/athoms/circular-progress";
import { CardWrapper } from "@/modules/ui/molecules/CardWrapper";
import { useEffect } from "react";

export const SampleReports = () => {
  useEffect(() => {
    console.log(data);
  }, []);

  const performanceScore: number =
    data.lighthouseResult.categories.performance.score;
  const bestPracticesScore: number =
    data.lighthouseResult.categories["best-practices"].score;
  const accessibilityScore: number =
    data.lighthouseResult.categories.accessibility.score;
  const seoScore: number = data.lighthouseResult.categories.seo.score;
  const avgScore =
    (performanceScore + bestPracticesScore + accessibilityScore + seoScore) / 4;

  return (
    <>
      <h2>SampleReports</h2>
      {/* <h3>Performance</h3>
      {data.lighthouseResult.categories.performance.auditRefs.map((audit) => {
        return (
          <div key={audit.id}>
            <p>{audit.id}</p>
            <p>score: {data.lighthouseResult?.audits[audit.id]?.score}</p>
          </div>
        );
      })} */}
      {/* {Object.keys(data.lighthouseResult.audits).map((audit) => {
        return (
          <div key={audit}>
            <p>{audit}</p>
            <p>
              {performanceMetrics.find((metric) => metric.id === audit)?.score}
            </p>
          </div>
        );
      })} */}

      <div className="flex flex-col gap-4">
        <div>
          <CardWrapper title="Average Score">
            <CircularProgress
              value={Math.round(avgScore * 100) / 100 ?? 0}
              showValue
            />
          </CardWrapper>
        </div>
        <div className="grid lg:grid-cols-12 grid-cols-8 gap-4">
          <div>
            <CardWrapper title="Performance">
              <CircularProgress value={performanceScore ?? 0} showValue />
            </CardWrapper>
          </div>
          <div>
            <CardWrapper title="Best Practices">
              <CircularProgress value={bestPracticesScore ?? 0} showValue />
            </CardWrapper>
          </div>
          <div>
            <CardWrapper title="Accessibility">
              <CircularProgress value={accessibilityScore ?? 0} showValue />
            </CardWrapper>
          </div>
          <div>
            <CardWrapper title="SEO">
              <CircularProgress value={seoScore ?? 0} showValue />
            </CardWrapper>
          </div>
        </div>
      </div>
    </>
  );
};
