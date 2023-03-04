import { previewData } from "next/headers";
import { groq } from "next-sanity";
import React from "react";
import { client } from "@/lib/sanity.client";
import PreviewBlogList from "@/components/PreviewBlogList";
import BlogList from "@/components/BlogList";
import PreviewSuspense from "../../components/PreviewSuspense";

type Props = {};

const query = groq`
*[_type=='post']{
  ...,
  author->,
  categories[]->,
  }| order(_createdAt desc)
`;

export const revalidate = 60;

const HomePage = async (props: Props) => {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-blue-500 animate-pulse">
              Loading Preview Data
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);
  return <BlogList posts={posts} />;
};

export default HomePage;
