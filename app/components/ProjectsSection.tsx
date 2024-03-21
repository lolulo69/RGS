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
    <section
      id="projets"
      className="mx-auto flex max-w-[90%] flex-col items-start py-16 pb-24 md:max-w-7xl"
    >
      <h2 className="font-title text-left text-4xl leading-tight text-gray-800 md:text-6xl">
        {`Nos projets`}
      </h2>
      <div className="mt-8 flex flex-row flex-wrap items-center justify-between gap-4">
        {posts.map((post: Post) => {
          return (
            <div
              key={post.title}
              className="relative flex h-[600px] w-full flex-col md:h-[800px] md:w-[48%]"
            >
              <Image
                src={post.featured_image as string}
                alt={post.title}
                width={800}
                height={1200}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-8 left-8 right-20 drop-shadow-xl md:right-44">
                <div className="flex cursor-pointer flex-row items-end gap-2 bg-gray-100 p-4 transition-colors ease-in-out hover:bg-gray-200 hover:drop-shadow-2xl">
                  <div className="flex flex-col gap-2">
                    <h3
                      className="font-title -mr-9 text-left text-xl leading-tight text-gray-800 md:text-2xl"
                      dangerouslySetInnerHTML={{ __html: post.title }}
                    ></h3>
                    <div
                      className="text-sm text-gray-600 md:text-base"
                      dangerouslySetInnerHTML={{ __html: post.excerpt }}
                    ></div>
                  </div>
                  <div className="flex w-7 md:w-8">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      height={32}
                      width={32}
                      className="h-32 w-32 text-gray-800"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M5 12H19M19 12L13 6M19 12L13 18"
                          stroke="#000000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
