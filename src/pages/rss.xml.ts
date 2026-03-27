import rss from "@astrojs/rss";
import { getCollection, render } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const posts = (await getCollection("posts", ({ data }) => !data.draft))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  const items = await Promise.all(
    posts.map(async (post) => {
      const { Content } = await render(post);
      return {
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.description,
        link: `/posts/${post.id}/`,
        content: post.body,
      };
    })
  );

  return rss({
    title: "Blog de Miguel Cuartin",
    description: "Blog personal sobre platform engineering, AI, infraestructura y liderazgo técnico.",
    site: context.site!,
    items,
  });
}
