import Post from "./Post";

type Props = { posts: Post[] };

const BlogList = ({ posts }: Props) => {
  return (
    <div>
      <hr className="border-red-500/30 pb-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-x-10 gap-y-16 pb-10">
        {/* posts */}
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
