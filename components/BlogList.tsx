import urlFor from "@/lib/urlFor";
import Image from "next/image";

type Props = { posts: Post[] };

const BlogList = ({ posts }: Props) => {
  return (
    <div>
      <hr className="border-red-500/30 my-10" />
      <div className="space-y-40">
        {/* posts */}
        {posts.map((post) => (
          <div
            key={post._id}
            className="flex flex-col relative cursor-pointer group"
          >
            <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-in">
              <Image
                className="object-cover object-left lg:object-center"
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
