import Link from "next/link"
import React from "react"
import Image from "next/image"

type Props = {
  href: string
  imageUrl: string
  imageAlt: string
  text: string
}

const BadgeAnimatedGradientBorder = (props: Props) => {
  const { href, imageUrl, imageAlt, text } = props

  return (
    <Link href={href} target="_blank" rel="noreferrer">
      <span className="relative inline-block overflow-hidden rounded-full p-[1px] align-bottom">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-baseline justify-center rounded-full bg-gray-950 px-3 py-1 text-xs font-medium text-gray-200 backdrop-blur-3xl gap-2">
          <Image src={imageUrl} width={20} height={10} alt={imageAlt} />
          Thoughtworks
        </span>
      </span>
    </Link>
  )
}

export default BadgeAnimatedGradientBorder
