// @ts-ignore
import Heading from "@/components/Heading";

import type {Metadata} from 'next'

export const metadata: Metadata = {
    title: 'Contact',
}

export default function ContactPage() {
    return (
        <>
            <Heading>Contact</Heading>
            <p>This is a contact page.</p>
        </>
    );
}