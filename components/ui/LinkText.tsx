import Link from "next/link"
import React from "react"
import Icons from "./Icons"
import { cn } from "@/libs/utils"

type Props = {
  href: string
  text: string
  className?: string
}

const LinkText = (props: Props) => {
  const { href, text, className } = props
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        className,
        "hover:underline underline-offset-2 inline-block mr-1"
      )}
    >
      <span className="block text-sm sm:text-base">
        {text}
        <Icons.arrow />
      </span>
    </Link>
  )
}

export default LinkText
