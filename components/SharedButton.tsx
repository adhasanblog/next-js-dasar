'use client';

import {useState} from "react";
import {LinkIcon} from "@heroicons/react/16/solid";

export default function SharedButton() {

    const [copied, setCopied] = useState(false);

    function copyLink() {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 3000);
    }

    return (
        <button
            className='border px-2 py-1 rounded text-gray-500 text-sm hover:bg-gray-200 hover:text-gray-700 flex items-center gap-2'
            onClick={copyLink}
            {...(copied && {disabled: true})}
        >
            <LinkIcon className='h-4 w-4'/>
            {copied ? 'Link Copied!' : 'Share Link'}
        </button>
    )
}