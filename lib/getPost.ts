import {readFile} from "fs/promises";
import {readdir} from "fs/promises";
import matter from "gray-matter";
// @ts-ignore
import {Post} from "@/components/PostCard";
import {marked} from "marked";


export async function getDataPost(params: string) {
    const text = await readFile(`./content/blog/${params}.md`, 'utf8');
    const {content, data} = matter(text);
    const {title, slug, date, imageUrl, authorUrl, author, excerpt}: Post = data
    const body = marked(content);

    return {
        title,
        slug,
        date,
        imageUrl,
        authorUrl,
        author,
        excerpt,
        body
    }
}

export async function getAllPosts() {
    const files = await readdir('./content/blog');

    const slugs = files.filter((file) =>
        file.endsWith('.md')).map((file) =>
        file.slice(0, -".md".length));


    const posts = [];

    for (const slug of slugs) {
        const post = await getDataPost(slug);
        posts.push(post);
    }

    return posts;
}

export async function getSlugs() {
    const files = await readdir('./content/blog');

    return files.filter((file) =>
        file.endsWith('.md')).map((file) =>
        file.slice(0, -".md".length));
}