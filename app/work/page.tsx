import Project from "@/components/Project"
import BackButton from "@/components/ui/BackButton"
import WorkExperience from "@/components/WorkExperience"
import React from "react"

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
