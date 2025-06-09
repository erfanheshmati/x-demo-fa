"use client";

import { Image } from "@imagekit/next";

interface ImageProps {
  path: string;
  alt: string;
  w?: number;
  h?: number;
  className?: string;
  tr?: boolean;
}

export default function CustomImage(props: ImageProps) {
  const { path, w, h, alt, className, tr } = props;
  
  const endpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

  return (
    <Image
      urlEndpoint={endpoint}
      src={path}
      alt={alt}
      className={className}
      {...(tr
        ? {
            transformation: [
              {
                width: `${w}`,
                height: `${h}`,
              },
            ],
          }
        : {
            width: w,
            height: h,
          })}
    />
  );
}
