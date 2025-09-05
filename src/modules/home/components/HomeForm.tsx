"use client";
import { Button } from "@/modules/ui/athoms";
import { RootInput } from "@/modules/ui/molecules/RootInput";
import { Link, Zap } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { URL, urlSchema } from "@/modules/analysis/models/url.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { hasFullAccess } from "@/modules/user/helpers/hasAccess";
import { useURLStore } from "@/store/urlStore";

export const HomeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<URL>({
    resolver: zodResolver(urlSchema),
  });

  const setUrl = useURLStore((state) => state.setUrl);
  const router = useRouter();
  const grantFullAccess = hasFullAccess();
  const onSubmit = (data: URL) => {
    setUrl(data.url);
    router.push(grantFullAccess ? "/pro-report" : "/free-report");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full mt-12 bg-primary/5 max-w-xl mx-auto p-4 rounded-lg border flex flex-col gap-2"
    >
      <RootInput
        htmlFor="url"
        placeholder="www.myweb.com"
        type="text"
        icon={Link}
        label="Your Website URL"
        {...register("url")}
        error={errors.url?.message as string}
      />
      <Button type="submit" size={"lg"}>
        <Zap />
        Analyze Now
      </Button>
    </form>
  );
};
