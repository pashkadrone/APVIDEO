import type { ProjectPlatform } from "@/content/site-data";

export function getYouTubeVideoId(url: string) {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.replace("/", "");
    }

    if (parsed.hostname.includes("youtube.com")) {
      return parsed.searchParams.get("v");
    }
  } catch {
    return null;
  }

  return null;
}

export function getEmbedUrl(url: string, platform: ProjectPlatform) {
  if (platform === "youtube") {
    const videoId = getYouTubeVideoId(url);
    return videoId
      ? `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1`
      : null;
  }

  try {
    const parsed = new URL(url);
    return `https://www.instagram.com${parsed.pathname}embed/captioned/`;
  } catch {
    return null;
  }
}
