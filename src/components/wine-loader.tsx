/* eslint-disable @next/next/no-img-element */
export function WineLoader() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        WebkitMaskImage: "url(/glass-mask.svg)",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
      }}
    >
      <img src="/glass.svg" alt="Glass of wine" className="relative z-10" />
      <div className="absolute top-5 left-0 w-302.5 h-17.5 animate-wine">
        <img src="/glass-fillings.svg" alt="Wine" />
      </div>
    </div>
  );
}
