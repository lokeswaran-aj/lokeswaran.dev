import React from "react"
import LinkText from "./LinkText"

interface IProps {
  period: string
  link: string
  name: string
  location?: string
  descriptions: string[]
  skills: string
}

const Experience = (props: IProps) => {
  const { period, link, name, location, descriptions, skills } = props
  return (
    <div className="sm:flex flex-row">
      <div>
        <p className="text-muted/80 text-sm w-36 mr-4">{period}</p>
      </div>
      <div className="flex-1">
        <div className="mb-4">
          <LinkText href={link} text={name} className="text-base font-medium" />
          <p className="text-muted/80 text-sm">{location}</p>
        </div>
        <div className="mb-4">
          <ul className="list-none text-sm ">
            {descriptions.map((description, index) => (
              <li className="pb-2" key={index}>
                {description}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-sm">
          skills: <span className="text-muted/80">{skills}</span>
        </div>
      </div>
    </div>
  )
}

export default Experience
