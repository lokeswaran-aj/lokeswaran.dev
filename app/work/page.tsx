import Project from "@/components/Project"
import BackButton from "@/components/ui/BackButton"
import WorkExperience from "@/components/WorkExperience"
import { siteConfig } from "@/config/site"
import type { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: "Work",
  description: "Details about myy work experience & projects can be found here",
}

const Work = () => {
  return (
    <section>
      <BackButton link="/" />
      <div className="flex flex-col gap-14">
        <WorkExperience />
        <hr />
        <Project />
      </div>
    </section>
  )
}

export default Work
