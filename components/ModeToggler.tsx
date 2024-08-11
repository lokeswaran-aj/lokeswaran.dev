"use client"

import React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

type Props = {}

const ModeToggler = (props: Props) => {
  const { theme, setTheme } = useTheme()
  return (
    <button
      className="p-0 text-white hover:text-dark-secondary inline-flex items-center justify-center"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="w-4 h-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute w-4 h-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </button>
  )
}

export default ModeToggler
