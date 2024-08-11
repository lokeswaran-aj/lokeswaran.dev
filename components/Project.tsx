import React from "react"
import Heading from "./ui/Heading"
import { siteConfig } from "@/config/site"
import Experience from "./ui/Experience"

const Project = () => {
  return (
    <div className="flex flex-col items-start justify-start mt-14">
      <Heading text="Project" />
      <div className="flex flex-col gap-9">
        {siteConfig.project.map((item, index) => (
          <Experience key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Project
