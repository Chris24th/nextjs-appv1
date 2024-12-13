import posts from '../components/posts'
import Link from 'next/link'

export const metadata = {
    title: 'Blog',
    description: 'Read my blog.',
}

export default function Page() {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>

            {posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <small>{post.date}</small>
                    <a href={`/blog/${post.slug}`}>Read More</a>
                </div>
            ))}
        </section>
    )
}

