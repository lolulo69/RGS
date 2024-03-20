import { fetchPosts } from "@/utils/fetchPosts";
import Image from "next/image";
import React from "react";

interface Post {
  id: number;
  title: string;
  excerpt: string;
  featured_image: string;
}

export const ProjectsSection = async () => {
  const posts = await fetchPosts();
  return (
    <section className="flex flex-col items-start md:max-w-7xl max-w-[90%] mx-auto py-12">
      <h2 className="md:text-6xl text-4xl font-title text-left text-gray-800 leading-tight">
        {`Nos projets`}
      </h2>
      <div className="flex flex-row flex-wrap justify-between items-center gap-4 mt-8">
        {posts.map((post: Post) => {
          const excerpt = post.excerpt.replace(/<\/?[^>]+(>|$)/g, "");
          return (
            <div
              key={post.title}
              className="relative flex flex-col md:w-[48%] h-[800px]"
            >
              <Image
                src={post.featured_image as string}
                alt={post.title}
                width={800}
                height={1200}
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-8 left-8 md:right-44 right-20 bg-gray-100 p-4">
                <h3 className="md:text-2xl text-xl font-title text-left text-gray-800 leading-tight">
                  {post.title}
                </h3>
                <p className="md:text-lg text-sm text-gray-600">{excerpt}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
