"use client"

import { cn } from "@/libs/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

const Header = () => {
  const pathname = usePathname()
  return (
    <div className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex gap-20 cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl">
        <Link
          href="/"
          className={cn(
            pathname === "/" ? "text-accent" : "",
            "hover:text-red-light transition"
          )}
        >
          Home
        </Link>
        <Link
          href="/work"
          className={cn(
            pathname === "/work" ? "text-accent" : "",
            "hover:text-red-light transition"
          )}
        >
          Work
        </Link>
        <Link
          href="/blog"
          className={cn(
            pathname === "/blog" ? "text-accent" : "",
            "hover:text-red-light transition"
          )}
        >
          Blog
        </Link>
      </span>
    </div>
  )
}

export default Header