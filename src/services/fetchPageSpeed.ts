import { pageSpeedUrl, pageSpeedKey } from "./api/endpoints.api";

export const fetchPageSpeed = async (url: string, signal: AbortSignal) => {
  const hitUrl = `${pageSpeedUrl}?url=https://${url}&key=${pageSpeedKey}`;

  const response = await fetch(hitUrl, { signal });
  if (!response.ok)
    throw Error(
      `Something whent wrong trying to catch data for ${url}. Try in other moment`
    );
  return response.json();
};
