import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function LottieAnimation({
  src,
  isVisible,
}: {
  src: string;
  isVisible: boolean;
}) {
  if (!isVisible) {
    return (
      <div className="w-full h-40 lg:h-72 flex items-center justify-center bg-linear-to-br from-black/5 to-black/10 rounded-lg overflow-hidden">
        <p className="text-black/30 text-sm">Loading...</p>
      </div>
    );
  }

  return (
    <div className="w-full h-40 lg:h-72 flex items-center justify-center bg-linear-to-br from-black/5 to-black/10 rounded-lg overflow-hidden">
      <DotLottieReact
        src={src}
        loop
        autoplay
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
