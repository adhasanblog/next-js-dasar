// @ts-ignore
import Heading from "@/components/Heading";


import type {Metadata} from 'next'

export const metadata: Metadata = {
    title: 'About',
}

export default function AboutPage() {
    return (
        <>
            <Heading>About</Heading>
            <p>This is a about page.</p>
        </>
    );
}