import Link from 'next/link'
import React from 'react'

type Props = {
    label: string,
    link: string,
    image?: string,
    color?: string
}

const ButtonLink = ({ label, link, color }: Props) => {
    const colorClass = color ? color : "bg-blue-500"
    const myClass = `w-full text-white h-24 font-semibold ${colorClass} flex items-center justify-center rounded-lg shadow-md hover:bg-blue-600 transition`
    return (
        <Link href={link}>
            <div className={myClass}>
                <span className="">{label}</span>
            </div>
        </Link>
    )
}

export default ButtonLink