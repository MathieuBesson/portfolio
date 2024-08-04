"use client"

import dynamic from "next/dynamic";

const DotLottieAnimation = dynamic(() => import("@/component/common/DotLottieAnimation"), {
  ssr: false,
});

export const BannerAnimation: React.FC = () => {
  return <><DotLottieAnimation  /></>
}