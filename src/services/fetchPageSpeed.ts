import { PageSpeedResponse } from "@/modules/analysis/models";
import { pageSpeedUrl, pageSpeedKey } from "./api/endpoints.api";

export const fetchPageSpeed = async (
  url: string,
  signal: AbortSignal,
  strategy: "desktop" | "mobile"
): Promise<PageSpeedResponse> => {
  const hitUrl = `${pageSpeedUrl}?url=https://${url}&key=${pageSpeedKey}&category=performance&category=best-practices&category=seo&category=accessibility&strategy=${strategy}`;

  const response = await fetch(hitUrl, { signal });
  if (!response.ok)
    throw Error(
      `Something whent wrong trying to catch data for ${url}. Try in other moment`
    );
  return response.json();
};
