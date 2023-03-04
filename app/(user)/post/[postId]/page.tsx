import { client } from "@/lib/sanity.client";
import urlFor from "@/lib/urlFor";
import { groq } from "next-sanity";
import Image from "next/image";
import React from "react";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";

type Props = {
  params: {
    postId: string;
  };
};

export const revalidate = 60;
export async function generateStaticParams() {
  const query2 = groq`
  *[_type=='post']{
    slug
  }
  `;

  const slugs: preFetchSlug[] = await client.fetch(query2);
  const slugRoutes = slugs.map((slug) => slug.slug.current);
  return slugRoutes.map((route) => ({
    postId: route,
  }));
}

const PostPage = async ({ params: { postId } }: Props) => {
  const query = groq`
    *[_type=='post' && slug.current ==$slug][0]{
  ...,
  author->,
  categories[]->,
  }
    `;

  const post: Post = await client.fetch(query, { slug: postId });

  return (
    <article className="px-5">
      <section>
        <div
          className="relative min-h-56 bg-blue-500 rounded-lg p-5 space-y-4 text-slate-200
        "
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10 blur-sm">
            <Image
              className="object-cover object-center mx-auto"
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>
          <section className="flex flex-col gap-y-2 md:pb-4 md:flex-row md:justify-between">
            <div>
              <h1 className="text-4xl font-bold">{post.title}</h1>
              <p>
                {new Date(post._createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
            <div className="flex items-center md:flex-col space-x-2">
              <Image
                className="object-contain object-center rounded-full"
                src={urlFor(post.author.image).url()}
                width={40}
                height={40}
                alt={post.author.name}
              />
              <div>
                <h3 className="text-lg font-semibold">{post.author.name}</h3>
                <div>{/* Portable text editor for auth bio */}</div>
              </div>
            </div>
          </section>

          <div className="space-y-2">
            <h2 className="italic line-clamp-2">{post.description}</h2>
            <div className="flex flex-row gap-2 md:justify-end">
              {post.categories.map((category) => (
                <div
                  key={category._id}
                  className="bg-gray-900 px-3 py-1 rounded-full text-sm font-semibold z-10"
                >
                  <p>{category.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PortableText value={post.body} components={RichTextComponents} />
    </article>
  );
};

export default PostPage;
