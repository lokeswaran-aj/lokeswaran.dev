import React from "react"
import Heading from "./ui/Heading"
import { siteConfig } from "@/config/site"
import Experience from "./ui/Experience"

const WorkExperience = () => {
  const { work } = siteConfig
  return (
    <div className="flex flex-col items-start justify-start">
      <Heading text="Work Experience" />
      <div className="flex flex-col gap-9">
        {work.map((item, index) => (
          <Experience key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

export default WorkExperience
