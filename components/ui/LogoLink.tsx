import React from "react"
import { Github, LinkedIn, Resume, Twitter } from "./Icons"
import { siteConfig } from "@/config/site"
import Link from "next/link"

interface LogoLinkProps {
  href: string
  Icon: React.ComponentType
}

const LogoLink = ({ href, Icon }: LogoLinkProps) => {
  return (
    <Link href={href} target="_blank" rel="noreferrer">
      <button className="relative inline-flex h-8 w-8 overflow-hidden rounded-lg p-[1px]">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-gray-950 px-1 py-0.5 text-sm font-medium text-gray-50 backdrop-blur-3xl">
          <Icon />
        </span>
      </button>
    </Link>
  )
}

const LogoLinks = () => {
  const { links } = siteConfig
  return (
    <div className="flex gap-3">
      <LogoLink href={links.github} Icon={Github} />
      <LogoLink href={links.twitter} Icon={Twitter} />
      <LogoLink href={links.linkedin} Icon={LinkedIn} />
      <LogoLink href={links.resume} Icon={Resume} />
    </div>
  )
}

export default LogoLinks
