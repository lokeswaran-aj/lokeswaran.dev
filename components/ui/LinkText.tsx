import Link from "next/link"
import React from "react"
import Arrow from "./Arrow"

type Props = {
  href: string
  text: string
}

const LinkText = (props: Props) => {
  const { href, text } = props
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="hover:underline underline-offset-2 text-primary inline-block mr-1"
    >
      <span className="flex items-center gap-1">
        {text}
        <Arrow />
      </span>
    </Link>
  )
}

export default LinkText
