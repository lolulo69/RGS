import { fetchPosts } from "@/utils/fetchPosts";
import Image from "next/image";
import React from "react";

export interface Post {
  id: number;
  title: string;
  excerpt: string;
  featured_image: string;
  slug: string;
}

export const ActualitesSection = async () => {
  const posts = await fetchPosts("actualites");
  return (
    <section
      id="actualites"
      className="mx-auto flex max-w-[90%] flex-col items-start py-16 pb-0 md:pb-24 xl:max-w-7xl"
    >
      <h2 className="text-left font-title text-4xl leading-tight text-gray-800 md:text-6xl">
        {`Nos actus`}
      </h2>
      <div className="mt-8 flex flex-row flex-wrap items-center justify-around gap-4">
        {posts
          .reverse()
          .slice(0, 2)
          .map((post: Post) => {
            return (
              <a
                key={post.title}
                href={`/projets/${post.slug}`}
                className="flex h-full max-h-[600px] w-full cursor-pointer flex-col gap-8 bg-gray-100 p-8 transition-colors ease-in-out hover:bg-gray-50 hover:drop-shadow-2xl md:w-[32%]"
              >
                <Image
                  src={post.featured_image as string}
                  alt={post.title}
                  width={600}
                  height={600}
                  className="h-[240px] w-full object-cover"
                />
                <div className="flex flex-col gap-2">
                  <h3
                    className=" text-left font-title text-xl leading-tight text-gray-800 md:text-2xl"
                    dangerouslySetInnerHTML={{ __html: post.title }}
                  ></h3>
                  <div
                    className="text-sm text-gray-600 md:text-base"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  ></div>
                </div>
              </a>
            );
          })}
        {posts.length > 1 && (
          <div className="flex h-[200px] w-full flex-col items-center justify-center md:h-[600px] md:w-[32%]">
            <a
              href="/actualites"
              className="w-fit rounded-xl bg-sky-950 px-4 py-2 text-base font-semibold text-gray-100 transition-colors duration-300 ease-in-out hover:bg-sky-900 hover:text-white md:text-lg"
            >
              {`Consulter toutes nos actus`}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};
