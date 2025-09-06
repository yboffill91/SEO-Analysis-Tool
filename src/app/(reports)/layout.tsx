import { LayoutTitle } from "@/modules/analysis/components/LayoutTitle";
import { PropsWithChildren } from "react";

function ReportsLayout({ children }: PropsWithChildren) {
  return (
    <div
      className="flex items-start justify-start
     flex-col container mx-auto w-full border-t px-1 py-4"
    >
      <h1 className="text-xl">
        <LayoutTitle />
      </h1>
      <div className="mt-4 flex-center container mx-auto">{children}</div>
    </div>
  );
}

export default ReportsLayout;
