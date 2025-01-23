'use client';
import posts from '../components/posts';

export default function Page() {
    return (
        <section className='p-10'>
            <h1 className="font-bold text-4xl mt-16 mb-12 tracking-tight text-center text-[var(--color4)] dark:text-gray-200">
                My Blog
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

    return (
        <div
            className="bg-[var(--color2)] shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"

        >
            <div className="p-6">
                <a href={`/blog/posts/${post.slug}`}>
                    <h2 className="hover:text-[var(--color3)] font-semibold text-xl text-[var(--color4)] mb-3">
                        {post.title}
                    </h2>
                </a>
                <p className="text-white-600 mb-4">
                    {post.description}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-400 dark:text-gray-500">
                    <span>{post.date}</span>
                    <a
                        href={`/blog/posts/${post.slug}`}
                        className="hover:text-[var(--color3)] font-medium flex items-center"
                    >
                        Read More

                    </a>
                </div>
            </div>
        </div>
    );
}
