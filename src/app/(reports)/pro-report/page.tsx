"use client";
import { useHasFullAccess } from "@/modules/user/helpers/hasAccess";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ProReportPage = () => {
  const grantFullAccess = useHasFullAccess();
  const router = useRouter();

  useEffect(() => {
    if (!grantFullAccess) router.push("/free-report");
  }, [grantFullAccess, router]);

  return <div>ProReportPage</div>;
};

export default ProReportPage;
