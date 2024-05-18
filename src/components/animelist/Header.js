import Link from 'next/link'
import React from 'react'

const Header = ({ title, linkHref, linkTitle }) => {
    return (
        <>
            <div class="flex items-center justify-center pt-4 bg-gray-100 h-40 w-full my-4">
                <h1 class="text-3xl font-bold text-gray-800">{title}</h1>
            </div>
            {
                linkHref && linkTitle ?
                    <div className="p-4 flex justify-end">
                        <Link href={linkHref} className="text-xl underline hover:text-indigo-500 transition-all ">{linkTitle}</Link>
                    </div>
                    : null
            }

        </>
    )
}

export default Header