import { detectImageGroups } from "@/app/components/GroupImagesAndDisplayCarousel";
import { fetchOnePost } from "@/utils/fetchPosts";
import Image from "next/image";
import React from "react";

type Post = {
  title: string;
  content: string;
  featured_image: string;
};

type Params = {
  params: {
    slug: string;
  };
};

const page: React.FC<Params> = async ({ params }) => {
  const post: Post = await fetchOnePost(params.slug);

  return (
    <main className="mx-auto mb-32 flex max-w-[90%] flex-col xl:max-w-7xl">
      <h1
        className="text-left font-title text-4xl leading-tight text-gray-800 lg:hidden"
        dangerouslySetInnerHTML={{ __html: post.title }}
      ></h1>
      <div className="mt-4 flex w-full flex-col-reverse items-start justify-start gap-8 lg:flex-row lg:gap-24">
        <div className="flex flex-col gap-10">
          <h1
            className="hidden text-left font-title text-4xl leading-tight text-gray-800 lg:inline-block lg:text-6xl"
            dangerouslySetInnerHTML={{ __html: post.title }}
          ></h1>
          <div className="text-sm text-gray-600 lg:text-base">
            {detectImageGroups(post.content)}
          </div>
        </div>

        <Image
          src={post.featured_image}
          width={800}
          height={400}
          alt={post.title}
          className="max-h-96 w-full object-contain lg:max-h-[100%] lg:w-[800px] lg:max-w-[40%]"
        />
      </div>
    </main>
  );
};

export default page;
