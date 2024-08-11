import React from "react"
import Heading from "./ui/Heading"
import { siteConfig } from "@/config/site"
import LinkText from "./ui/LinkText"

const WorkExperience = () => {
  const { work } = siteConfig
  return (
    <div className="flex flex-col items-start justify-start mt-14">
      <Heading text="Work Experience" />
      <div className="flex flex-col gap-9">
        {work.map((item) => (
          <div className="flex flex-row pb-4 ">
            <div>
              <p className="text-gray-400 text-sm w-36 mr-4">{item.period}</p>
            </div>
            <div className="flex-1">
              <div className="mb-4">
                <LinkText
                  href={item.link}
                  text={item.name}
                  className="text-base font-medium"
                />
                <p className="text-gray-400 text-sm">{item.location}</p>
              </div>
              <ul className="list-none text-sm ">
                {item.description.map((description) => (
                  <li className="pb-2">{description}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkExperience
