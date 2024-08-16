"use client"
import React, { useState } from "react"
import {
  TooltipContent,
  TooltipTrigger,
  Tooltip,
} from "@/components/ui/tooltip"
import { siteConfig } from "@/config/site"

const Email = () => {
  const [tooltipMessage, setTooltipMessage] = useState("Copy")
  const [isTooltipOpen, setIsTooltipOpen] = useState(false)

  const handleOnClick = () => {
    navigator.clipboard.writeText(siteConfig.email)
    setTooltipMessage("Copied!")
    setIsTooltipOpen(true)
  }
  return (
    <Tooltip open={isTooltipOpen} onOpenChange={setIsTooltipOpen}>
      <TooltipTrigger
        asChild
        onClick={handleOnClick}
        onMouseLeave={() => setTooltipMessage("Copy")}
      >
        <button className="text-primary hover:underline underline-offset-2 cursor-pointer">
          {siteConfig.email}
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{tooltipMessage}</p>
      </TooltipContent>
    </Tooltip>
  )
}

export default Email
