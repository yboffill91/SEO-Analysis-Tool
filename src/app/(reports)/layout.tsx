import { LayoutTitle } from "@/modules/analysis/components/LayoutTitle";
import { CardWrapper } from "@/modules/ui/molecules/CardWrapper";
import { PropsWithChildren } from "react";

function ReportsLayout({ children }: PropsWithChildren) {
  return (
    <CardWrapper mainWrapper title={<LayoutTitle />}>
      {children}
    </CardWrapper>
  );
}

export default ReportsLayout;
