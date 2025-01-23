'use client';
import React, { useState } from 'react';
import arrowLeft from '../../public/arrow-left.json';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

type PostLayoutProps = {
    title: string;
    content: () => JSX.Element;
};

export default function PostLayout({ title, content }: PostLayoutProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <article className="mt-32 w-1/2 mx-auto">
            <Lottie
                animationData={arrowLeft}
                loop={isHovered}
                className='w-8 h-8 md:w-10 md:h-10 cursor-pointer mb-6'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => window.history.back()}
            />
            <div className="flex justify-center mb-10">
                <h1 className="text-4xl font-bold text-[var(--color4)] mb-4">
                    {title}
                </h1>
            </div>
            <div className="">
                {content()}
            </div>
        </article>
    );
}