type PostLayoutProps = {
    title: string;
    content: () => JSX.Element;
};

export default function PostLayout({ title, content }: PostLayoutProps) {
    return (
        <article className="mt-20 w-1/2 mx-auto">
            <div className="flex justify-center mb-10">
                <h1>{title}</h1>
            </div>
            <div className="">
                {content()}
            </div>
        </article>
    );
}