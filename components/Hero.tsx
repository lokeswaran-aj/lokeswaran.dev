import { siteConfig } from "@/config/site"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import LinkButton from "./LinkButton"

const Hero = () => {
  const {
    name,
    role,
    currentCompany,
    currentCompanyImage,
    currentCompanyUrl,
    myImage,
    links,
    email,
  } = siteConfig
  return (
    <section className="">
      <div className="flex flex-col items-center justify-start">
        <Image
          src={myImage}
          width={64}
          height={64}
          alt={name}
          className="rounded-full mb-3"
        />
        <p className="text-xl font-bold">{name}</p>
        <p className="text-lg font-medium text-text/70">{role}</p>
      </div>
      <div className="mt-14">
        <h2 className="mb-4 font-bold">About me:</h2>
        <div className="text-text/70">
          <p>
            I&apos;m a software engineer, ambitious and open source enthusiast.
            I currently work at{" "}
            <LinkButton
              href={currentCompanyUrl}
              imageUrl={currentCompanyImage}
              imageAlt={currentCompany}
              text={currentCompany}
            />
            , where I build web applications and contribute to open source.
          </p>
          <p>I am passionate about Web development and Generative AI.</p>
        </div>
      </div>
      <div className="mt-14">
        <h2 className="mb-4 font-bold">Connect:</h2>
        <p className="text-text/70">
          Connect with me on{" "}
          <Link
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2"
          >
            LinkedIn
          </Link>
          , follow me on{" "}
          <Link
            href={links.twitter}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2"
          >
            X
          </Link>
          , view my code and open-source projects on{" "}
          <Link
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2"
          >
            Github
          </Link>
          , or email me directly at{" "}
          <span className="underline underline-offset-2 cursor-pointer">
            {email}
          </span>
          .
        </p>
      </div>
    </section>
  )
}

export default Hero
