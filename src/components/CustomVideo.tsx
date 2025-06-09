"use client";

import { Video } from "@imagekit/next";

interface VideoPropsType {
  path: string;
  className?: string;
}

export default function CustomVideo(props: VideoPropsType) {
  const { path, className } = props;

  const endpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

  return (
    <Video urlEndpoint={endpoint} src={path} className={className} controls />
  );
}
