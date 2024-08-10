import Link from "next/link"
import React from "react"
import Image from "next/image"

type Props = {
  href: string
  imageUrl: string
  imageAlt: string
  text: string
}

const LinkButton = (props: Props) => {
  const { href, imageUrl, imageAlt, text } = props
  return (
    <Link href={href} target="_blank" rel="noreferrer">
      <span className="ext-[#f2617b] inline-flex gap-1 items-baseline rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
        <Image src={imageUrl} width={20} height={10} alt={imageAlt} />
        {text}
      </span>
    </Link>
  )
}

export default LinkButton
