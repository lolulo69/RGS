import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Post } from "./ProjectsSection";

interface Props {
  post: Post;
  category: string;
}

export const PostSmallCard: React.FC<Props> = ({ post, category }) => {
  return (
    <Link
      className="flex max-w-full cursor-pointer flex-col items-center gap-6 bg-gray-100 shadow-lg transition-colors ease-in-out hover:bg-gray-50 hover:drop-shadow-2xl md:flex-row md:p-6"
      href={`/${category}/${post.slug}`}
    >
      <Image
        src={post.featured_image as string}
        width="400"
        height="400"
        alt={`Photo illustrant le post ${post.title}`}
        className="h-32 w-full object-cover md:w-32 md:shadow-lg"
      />
      <div className="flex flex-col gap-2 px-4 pb-2 md:px-0 md:pb-0">
        <h3
          className="text-left font-title text-xl leading-tight text-gray-800 md:text-2xl"
          dangerouslySetInnerHTML={{ __html: post.title }}
        ></h3>
        <div
          className="text-sm text-gray-600 md:text-base"
          dangerouslySetInnerHTML={{ __html: post.excerpt }}
        ></div>
      </div>
    </Link>
  );
};
