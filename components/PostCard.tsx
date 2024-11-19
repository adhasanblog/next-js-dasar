import Link from "next/link";

export type Post = {
    title: string;
    slug: string;
    imageUrl: string;
    date: string | Date;
    excerpt: string;
    author: string;
    authorUrl: string;
}

interface PostCardProps {
    data: Post;
}

export default function PostCard({data}: PostCardProps) {
    const {title, imageUrl, slug, date, excerpt, author, authorUrl} = data;

    return (
        <div className="flex flex-wrap">
            <div className='mb-4 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-2/12'>
                <div className='relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg '>
                    <img className='w-full' src={imageUrl} alt={title}/>
                    <Link href={`/blog/${slug}`}>
                        <div
                            className='absolute inset-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[#FFFFFF20]'></div>
                    </Link>
                </div>
            </div>
            <div className='mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-10/12'>
                <h5 className='text-lg font-bold'>{title}</h5>
                <p className='mb-3 text-gray-800'>
                    <small>Published <u>13.01.2022</u> by {""}
                        <a href={authorUrl}>{author}</a>
                    </small>
                </p>
                <p className='mb-5 text-gray-800 line-clamp-3 md:line-clamp-none'>
                    {excerpt}
                </p>
                <div className='flex items-center justify-end'>
                    {/*<Link href={`${slug}`}*/}
                    {/*      className='text-gray-800 w-max py-2 px-3 rounded-lg  shadow-lg hover:bg-gray-800 hover:text-white'>*/}
                    {/*    Read more*/}
                    {/*</Link>*/}
                </div>
            </div>
        </div>
    )
}