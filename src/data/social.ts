export type SocialPlatform =
  | "x"
  | "instagram"
  | "substack"
  | "linkedin"
  | "reddit"
  | "github";

export interface SocialPost {
  platform: SocialPlatform;
  date: string;
  title: string;
  excerpt?: string;
  href: string;
  featured?: boolean;
}

/**
 * Manual feed for the first version.
 *
 * Later this can be replaced by platform-specific adapters.
 * Keeping one normalized shape means the UI does not care where
 * a post came from.
 */
export const socialPosts: SocialPost[] = [
  {
    platform: "x",
    date: "2026-10-02",
    title: "Thinking about combinatorics, algorithms, and why representations matter.",
    href: "https://x.com/",
    featured: true,
  },
  {
    platform: "substack",
    date: "2026-09-28",
    title: "A new essay is brewing.",
    excerpt: "The long version will live on the website; Substack gets the letter.",
    href: "https://substack.com/",
  },
  {
    platform: "github",
    date: "2026-09-25",
    title: "Building the next iteration of the personal site.",
    href: "https://github.com/",
  },
  {
    platform: "instagram",
    date: "2026-09-21",
    title: "A visual experiment in graph theory.",
    href: "https://www.instagram.com/",
  },
  {
    platform: "linkedin",
    date: "2026-09-18",
    title: "Research notes, projects, and things I am building.",
    href: "https://www.linkedin.com/",
  },
];

export const platformLabels: Record<SocialPlatform, string> = {
  x: "X",
  instagram: "Instagram",
  substack: "Substack",
  linkedin: "LinkedIn",
  reddit: "Reddit",
  github: "GitHub",
};
