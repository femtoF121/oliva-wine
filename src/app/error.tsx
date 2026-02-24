"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-4">
      <h1>Something went wrong!</h1>
      <h4>{error.name}</h4>
      <p>{error.message}</p>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
