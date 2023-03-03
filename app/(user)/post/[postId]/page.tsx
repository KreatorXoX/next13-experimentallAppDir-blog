import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import React from "react";

type Props = {
  params: {
    postId: string;
  };
};

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
    <div>
      <p>page {postId}</p>
      <p>{post.author.name}</p>
    </div>
  );
};

export default PostPage;
