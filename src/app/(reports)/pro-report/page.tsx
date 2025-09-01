"use client";
import { hasFullAccess } from "@/modules/user/helpers/hasAccess";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ProReportPage = () => {
  const grantFullAccess = hasFullAccess();
  const router = useRouter();

  useEffect(() => {
    if (!grantFullAccess) router.push("/free-report");
  }, []);

  return <div>ProReportPage</div>;
};

export default ProReportPage;
