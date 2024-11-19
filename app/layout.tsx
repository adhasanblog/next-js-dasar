import './global.css';
import Navbar from "../components/Navbar";
// @ts-ignore
import {roboto} from "@/app/font";

import type {Metadata} from 'next'

export const metadata: Metadata = {
    title: {
        default: 'NextJS Fundamental',
        template: '%s | NextJS Fundamental',
    },
    description: 'This is a tutorial page',
}

export default function Layout({children}) {
    return (
        <html lang='en' className={roboto.className}>
        <head>
            <meta content='2414816385225638' property='fb:app_id'/>
            <title>Learn NextJS Fundamentalck</title>

        </head>
        <body className='flex flex-col px-4 py-4 min-h-screen'>
        <header>
            <Navbar/>
        </header>
        <main className='py-3 grow'>
            {children}
        </main>
        <footer className="border-t py-3 text-center">
            <span>
                &copy; 2024. All right reserved.
            </span>
        </footer>
        </body>
        </html>
    )
}