import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async ({ site }) => {
  const entries = (await getCollection("writing"))
    .filter((entry) => !entry.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  const base = site ?? new URL("https://veermakesthings.com");

  const items = entries.map((entry) => {
    const url = new URL(`/writing/${entry.id}/`, base).href;

    return `
      <item>
        <title><![CDATA[${entry.data.title}]]></title>
        <description><![CDATA[${entry.data.description}]]></description>
        <link>${url}</link>
        <guid>${url}</guid>
        <pubDate>${entry.data.pubDate.toUTCString()}</pubDate>
      </item>
    `;
  }).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title>Veer Makes Things</title>
        <description>Mathematics, computer science, research, writing, and other things Veer thinks are worth sharing.</description>
        <link>${base.href}</link>
        ${items}
      </channel>
    </rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
};
