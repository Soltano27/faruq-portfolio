"use client";

import { useEffect, useRef, useState } from "react";

/** Shows an image from /public, or a quiet tinted block if the file is missing. */
export default function Photo({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  // An error can fire before React attaches onError on server-rendered HTML.
  // A lazy image that simply hasn't loaded yet looks the same, so confirm with a probe.
  useEffect(() => {
    const img = ref.current;
    if (!img || !img.complete || img.naturalWidth > 0) return;
    const probe = new Image();
    probe.onerror = () => setFailed(true);
    probe.src = src;
  }, [src]);

  if (failed) return <div role="img" aria-label={alt} style={{ width: "100%", height: "100%" }} />;
  // eslint-disable-next-line @next/next/no-img-element
  return <img ref={ref} src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />;
}
