import { WineLoader } from "@/components/wine-loader";

export default function Loading() {
  return (
    <div className="h-screen flex flex-col gap-6 items-center justify-center">
      <WineLoader />
      <h1 className="font-lora font-semibold text-[32px]">Loading...</h1>
    </div>
  );
}
