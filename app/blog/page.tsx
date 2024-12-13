import posts from '../components/posts'
import Link from 'next/link'

export const metadata = {
    title: 'Blog',
    description: 'Read my blog.',
}

export default function Page() {
    return (
        <section className='p-10'>
            <h1 className="font-bold text-4xl mt-16 mb-12 tracking-tight text-center text-[var(--color4)] dark:text-gray-200">
                My Blog
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <div
                        key={post.id}
                        className="bg-[var(--color2)] shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                        <div className="p-6">
                            <h2 className="font-semibold text-xl text-[var(--color4)] mb-3">
                                {post.title}
                            </h2>
                            <p className="text-white-600  mb-4">
                                {post.description}
                            </p>
                            <div className="flex justify-between items-center text-sm text-gray-400 dark:text-gray-500">
                                <span>{post.date}</span>
                                <a
                                    href={`/blog/${post.slug}`}
                                    className="hover:text-[var(--color3)] font-medium"
                                >
                                    Read More →
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    )
}

