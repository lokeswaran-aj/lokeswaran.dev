import Link from "next/link"
import React from "react"
import Arrow from "./Arrow"
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
      <span className="flex items-center gap-1">
        {text}
        <Arrow />
      </span>
    </Link>
  )
}

export default LinkText
