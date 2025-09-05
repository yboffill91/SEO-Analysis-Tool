import { cn } from "@/lib/utils";
import { CircularProgress } from "@/modules/ui/athoms";
import { CardWrapper } from "@/modules/ui/molecules/CardWrapper";
import { Triangle, Square, Circle } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Props {
  avgScore: number;
  performanceScore: number;
  bestPracticesScore: number;
  accessibilityScore: number;
  seoScore: number;
  screenShoot: string;
}

export const ReportHeader = ({
  avgScore,
  performanceScore,
  bestPracticesScore,
  accessibilityScore,
  seoScore,
  screenShoot,
}: Props) => {
  return (
    <header className={cn("flex-center flex-col")}>
      <div className="bg-card w-full  text-center flex-center flex-wrap rounded-lg border p-4 gap-6">
        <div>
          <CircularProgress
            value={performanceScore}
            size={60}
            strokeWidth={1}
          />
          <h4>Performance</h4>
        </div>
        <div>
          <CircularProgress
            value={bestPracticesScore}
            size={60}
            strokeWidth={1}
          />
          <h4>Best Practices</h4>
        </div>
        <div>
          <CircularProgress value={seoScore} size={60} strokeWidth={1} />
          <h4>SEO</h4>
        </div>
        <div>
          <CircularProgress
            value={accessibilityScore}
            size={60}
            strokeWidth={1}
          />
          <h4>Accessibility</h4>
        </div>
      </div>

      <div className="grid md:grid-cols-2 p-6 w-full gap-6 ">
        <div className="flex-center flex-col w-full gap-6  ">
          <div className="flex-center flex-col">
            <h3 className="text-lg">General Score</h3>
            <p className="text-sm text-foreground/80">
              Complete SEO Performance Eval
            </p>
          </div>
          <CircularProgress
            value={avgScore}
            showValue
            size={150}
            strokeWidth={3}
            fontSize="xl"
          />
          <div className="container max-w-lg flex-center  bg-accen/10 rounded-lg text-accent-foreground p-2">
            <div className="flex-center gap-2 border-r  px-4 bg-destructive/10 rounded-s-lg">
              <Triangle className="text-destructive size-3 fill-destructive" />{" "}
              <p className="text-destructive text-sm">- 0.49</p>
            </div>
            <div className="flex-center gap-2 border-r px-4 bg-warning/10">
              <Square className="text-warning size-3 fill-warning" />{" "}
              <p className="text-warning text-sm">0.5-0.89</p>
            </div>{" "}
            <div className="flex-center bg-success/10 gap-2 px-4 rounded-e-lg">
              <Circle className="text-success size-3 fill-success " />{" "}
              <p className="text-success text-sm">0.9 +</p>
            </div>
          </div>
        </div>
        <div className="flex-center flex-col w-full  ">
          <div className="flex-center flex-col gap-2   rounded-lg">
            <Image
              src={screenShoot}
              alt="ScreenShoot"
              width={1024}
              height={1024}
              unoptimized
              className="object-center object-contain h-96 rounded-lg p-2 border"
            />
          </div>
        </div>
      </div>
      {/* 
          
          
           
          
          
          */}
    </header>
  );
};
