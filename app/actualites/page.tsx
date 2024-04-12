import { fetchPosts } from "@/utils/fetchPosts";
import React from "react";
import { PostSmallCard } from "../components/PostSmallCard";
import { Post } from "../components/ProjectsSection";

const page = async () => {
  const CATEGORY = "actualites";
  const posts = await fetchPosts(CATEGORY);
  return (
    <main className="mx-auto flex max-w-[90%] flex-col gap-8 pb-16 xl:max-w-7xl">
      <h1 className="text-left font-title text-4xl leading-tight text-gray-800 lg:text-6xl">
        {`Actualités`}
      </h1>
      {posts.map((post: Post) => (
        <PostSmallCard post={post} category={CATEGORY} key={post.slug} />
      ))}
    </main>
  );
};

export default page;
