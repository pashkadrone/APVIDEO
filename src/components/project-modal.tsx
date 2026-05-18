"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import type { ProjectPlatform } from "@/content/site-data";
import { getEmbedUrl } from "@/lib/video";

type Project = {
  title: string;
  description: string;
  videoUrl: string;
  platform: ProjectPlatform;
  category: string;
};

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process: () => void;
      };
    };
  }
}

export function ProjectModal({
  open,
  onClose,
  project
}: {
  open: boolean;
  onClose: () => void;
  project: Project | null;
}) {
  useEffect(() => {
    if (!open || !project || project.platform !== "instagram") {
      return;
    }

    const existing = document.querySelector('script[data-instagram-embed="true"]');
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.dataset.instagramEmbed = "true";
      document.body.appendChild(script);
      script.onload = () => window.instgrm?.Embeds?.process();
      return;
    }

    window.instgrm?.Embeds?.process();
  }, [open, project]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, open]);

  const embedUrl = project ? getEmbedUrl(project.videoUrl, project.platform) : null;

  return (
    <AnimatePresence>
      {open && project ? (
        <motion.div
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="relative w-full max-w-5xl rounded-[2rem] border border-white/12 bg-[#0a0a0a] p-4 shadow-soft"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            onClick={(event) => event.stopPropagation()}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <button
              aria-label="Закрыть"
              className="absolute right-5 top-5 z-10 rounded-full border border-white/12 bg-white/5 p-2 text-white/72 transition hover:bg-white/10"
              onClick={onClose}
              type="button"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
                <div className="aspect-video w-full">
                  {project.platform === "youtube" && embedUrl ? (
                    <iframe
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full"
                      loading="lazy"
                      src={embedUrl}
                      title={project.title}
                    />
                  ) : null}
                  {project.platform === "instagram" && embedUrl ? (
                    <div className="flex h-full items-center justify-center overflow-y-auto px-4 py-6">
                      <blockquote
                        className="instagram-media w-full"
                        data-instgrm-captioned
                        data-instgrm-permalink={project.videoUrl}
                        data-instgrm-version="14"
                      >
                        <a href={project.videoUrl}>Открыть в Instagram</a>
                      </blockquote>
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-col justify-between gap-6 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-white/44">
                    {project.category}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl text-white">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/68">
                    {project.description}
                  </p>
                </div>
                <a
                  className="text-sm uppercase tracking-[0.2em] text-white/75"
                  href={project.videoUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  Открыть оригинал
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
