export const fetchApi = async (url: string, signal: AbortSignal) => {
  const response = await fetch(url, { signal });
  if (!response.ok) {
    throw new Error("Network response error. Check your internet connection");
  }
  return response.json();
};
