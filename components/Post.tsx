import Image from "next/image";
import React from "react";
import ClientSideRoute from "./ClientSideRoute";
import urlFor from "@/lib/urlFor";

type Props = {
  post: Post;
};
const Post = ({ post }: Props) => {
  return (
    <ClientSideRoute route={post.slug.current}>
      <div className="flex flex-col relative cursor-pointer group">
        <div className="relative w-full h-60 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-in">
          <Image
            className="object-cover lg:object-center"
            src={urlFor(post.mainImage).url()}
            alt={post.author.name}
            fill
          />
          <div
            className="absolute bottom-0 bg-black bg-opacity-50 backdrop-blur-sm rounded w-full
            drop-shadow-lg text-white p-5 flex justify-between
            "
          >
            <div>
              <p>{post.title}</p>
              <p>
                {new Date(post._createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
            <div className="flex flex-col gap-y-2 md:flex-row md:gap-x-2 items-center">
              {post.categories.map((category) => (
                <div
                  key={category._id}
                  className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold"
                >
                  <p>{category.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-5 flex-1">
          <p className="underline text-lg font-semibold">{post.title}</p>
          <p className="line-clamp-2 text-gray-500 text-sm">
            {post.description}
          </p>
        </div>
        <div className="mt-5">
          <span className="font-semibold group-hover:underline">Read more</span>{" "}
          <span className="text-xl">&#x2197;</span>
        </div>
      </div>
    </ClientSideRoute>
  );
};

export default Post;
