// @ts-ignore
import Heading from "@/components/Heading";

// @ts-ignore
import {getAllPosts, getDataPost, getSlugs} from "@/lib/getPost";
import * as console from "node:console";
import {Metadata} from "next";
// @ts-ignore
import {Post} from "@/components/PostCard";
// @ts-ignore
import SharedButton from "@/components/SharedButton";

export async function generateMetadata(props): Promise<Metadata> {
    const {query} = await props.params;
    const post: Post = await getDataPost(query)


    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            type: 'website',
            url: `/blog/${post.slug}`,
            title: post.title,
            description: post.excerpt,
            siteName: 'Next.js Fundamental',
            images: [{
                url: post.imageUrl,
            }],
        }
    }
}

export async function generateStaticParams() {
    const slugs = await getSlugs();
    return slugs.map((slug: Post) => ({query: slug}));
}


export default async function PostPage(props) {
    const {query} = await props.params;
    const {title, slug, date, imageUrl, authorUrl, author, description, body} = await getDataPost(query);

    return (
        <>
            <Heading>{title}</Heading>
            <div className='flex gap-3 pb-2 items-baseline'>
                <p className='pb-2 italic text-sm'>
                    Published <u>{new Date(date).toLocaleDateString()}</u> by {""} <a href={authorUrl}>{author}</a>
                </p>
                <SharedButton/>
            </div>

            <img className='mb-2 rounded' src={imageUrl} alt={title} width={640} height={360}/>
            <article dangerouslySetInnerHTML={{__html: body}} className='max-w-screen-sm prose prose-slate'/>
        </>
    );
}