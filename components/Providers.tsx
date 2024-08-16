import { ThemeProvider } from "next-themes"
import React from "react"
import { Tooltip, TooltipProvider } from "./ui/tooltip"

type Props = {
  children: React.ReactNode
}

const Providers = (props: Props) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <TooltipProvider delayDuration={0}>{props.children}</TooltipProvider>
    </ThemeProvider>
  )
}

export default Providers
