import Link from "next/link";
// @ts-ignore
import Heading from '@/components/Heading';
// @ts-ignore
import PostCard, {Post} from "@/components/PostCard";
// @ts-ignore
import {getAllPosts} from "@/lib/getPost";

import type {Metadata} from 'next'

export const metadata: Metadata = {
    title: 'Blog',
}

export default async function BlogPage() {

    const posts = await getAllPosts();
    return (
        <>
            <Heading>Blog</Heading>
            <h2 className='text-2xl mb-3'>List of posts</h2>
            {posts.map((post: Post, index: number) => (
                <PostCard data={post} key={index}/>
            ))}

        </>
    );
}