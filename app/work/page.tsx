import Project from "@/components/Project"
import BackButton from "@/components/ui/BackButton"
import WorkExperience from "@/components/WorkExperience"
import React from "react"

const Work = () => {
  return (
    <section>
      <BackButton link="/" />
      <WorkExperience />
      <Project />
    </section>
  )
}

export default Work
