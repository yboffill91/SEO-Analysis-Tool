import React from "react";

export const MainSkeleton = () => {
  return (
    <div className="container mx-auto max-w-md">
      <div className="flex-row h-16 flex">
        <div className="flex-row h-9 gap-3.5 w-full flex">
          <div className="h-7 w-24 rounded-md ml-44 animate-pulse bg-accent "></div>
          <div className="h-7 w-24 rounded-md animate-pulse bg-accent "></div>
        </div>
      </div>
      <div className="flex-row h-full flex">
        <div className="h-40 w-40 rounded-full ml-48 animate-pulse bg-accent "></div>
      </div>
      <div className="flex-row h-16 mt-3 gap-4 flex">
        <div className="h-16 w-16 rounded-full ml-32 animate-pulse bg-accent "></div>
        <div className="h-16 w-16 rounded-full animate-pulse bg-accent "></div>
        <div className="h-16 w-16 rounded-full animate-pulse bg-accent "></div>
        <div className="h-16 w-16 rounded-full animate-pulse bg-accent "></div>
      </div>
      <div className="flex-row h-56 mt-2 w-full flex">
        <div className="h-48 w-96 rounded-md mt-2.5 ml-2.5 animate-pulse bg-accent "></div>
        <div className="h-48 w-1.5 rounded-md mt-2.5 ml-2.5 animate-pulse bg-accent "></div>
        <div className="flex-col h-52 w-full ml-3.5 flex">
          <div className="h-8 w-full rounded-md mt-5 animate-pulse bg-accent "></div>
          <div className="h-2.5 w-32 rounded-md mt-5 animate-pulse bg-accent "></div>
          <div className="h-2.5 w-28 rounded-md mt-5 animate-pulse bg-accent "></div>
          <div className="h-2.5 w-56 rounded-md mt-5 animate-pulse bg-accent "></div>
          <div className="h-2.5 w-44 rounded-md mt-5 animate-pulse bg-accent "></div>
          <div className="h-2.5 w-56 rounded-md mt-5 animate-pulse bg-accent "></div>
        </div>
      </div>
    </div>
  );
};
