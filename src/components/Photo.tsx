import type { ImgHTMLAttributes } from "react";

declare global {
  interface Window {
    __lmOffline?: boolean;
  }
}

type PhotoProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "srcSet"> & {
  /** Full-size photo, e.g. "images/tacos.webp". A 720px-wide "-720" copy must sit next to it. */
  src: string;
  width: number;
  height: number;
  /** How wide the photo is drawn, so the browser can pick the phone copy when it's enough. */
  sizes: string;
};

/** A photo that phones download at 720px wide instead of full size. */
export default function Photo({ src, width, sizes, ...rest }: PhotoProps) {
  // The all-in-one offline copy only embeds the full-size photos.
  const offline = typeof window !== "undefined" && window.__lmOffline;
  const srcSet = offline
    ? undefined
    : `${src.replace(/\.webp$/, "-720.webp")} 720w, ${src} ${width}w`;
  return <img src={src} srcSet={srcSet} sizes={offline ? undefined : sizes} width={width} {...rest} />;
}
