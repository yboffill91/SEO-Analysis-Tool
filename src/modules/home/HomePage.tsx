import { Circle, Gauge } from "lucide-react";
import { CardWrapper } from "../ui/molecules/CardWrapper";
import { HomeForm } from "./components/HomeForm";

export const HomePage = () => {
  return (
    <CardWrapper
      title={
        <div className="flex items-center justify-start gap-2">
          <Gauge />
          SEO Audit Tool
        </div>
      }
      description="Tamer Digital LLC"
      mainWrapper
    >
      <div className="min-h-[calc(100dvh-14rem)] flex-center flex-col container mx-auto  text-center">
        <h1 className="heading-gradient capitalize">
          optimize your website performance
        </h1>
        <p className="text-foreground/70 leading-tight tracking-tighter text-pretty mt-4">
          Get comprehensive SEO analysis and performance metrics to boost your
          websit&apos;'s visibility and speed. On-page, off-page, and technical
          SEO insights in one place.
        </p>
        <HomeForm />
        <div className="w-full flex-center gap-4 flex-wrap mt-12">
          <div className="flex-center gap-2">
            <Circle className="size-2 text-primary fill-accent" />
            On-Page SEO Analysis
          </div>
          <div className="flex-center gap-2">
            <Circle className="size-2 text-primary fill-accent" />
            Performance Metrics
          </div>
          <div className="flex-center gap-2">
            <Circle className="size-2 text-primary fill-accent" />
            Technical SEO Insights
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};
