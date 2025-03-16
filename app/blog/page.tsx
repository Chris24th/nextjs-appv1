"use client";
import { useState } from "react";
import posts from "../components/posts";
import rightArrow from "../../public/arrow-right.json";
import dynamic from "next/dynamic";
import Link from "next/link";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Blogs() {
  return (
    <section className="p-10">
      <h1 className="font-bold text-4xl mt-16 mb-12 tracking-tight text-center text-[var(--color4)] dark:text-gray-200">
        My Blogs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-12 md:mx-20 lg:mx-24 2xl:mx-60">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}

interface Post {
  id: number;
  title: string;
  description: string;
  date: string;
  slug: string;
}

function PostCard({ post }: { post: Post }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-[var(--color2)] shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6">
        <Link href={`/blog/posts/${post.slug}`} passHref>
          <h2 className="hover:text-[var(--color3)] font-semibold text-xl text-[var(--color4)] mb-3">
            {post.title}
          </h2>
        </Link>
        <p className="text-white-600 mb-4">{post.description}</p>
        <div className="flex justify-between items-center text-sm text-gray-400 dark:text-gray-500">
          <span>{post.date}</span>
          <Link
            href={`/blog/posts/${post.slug}`}
            passHref
            className="flex items-center hover:text-[var(--color3)]"
          >
            Read More
            <Lottie
              animationData={rightArrow}
              className="h-6 ml-1"
              loop={isHovered}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
