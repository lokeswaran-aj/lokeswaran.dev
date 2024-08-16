import { siteConfig } from "@/config/site"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import BadgeAnimatedGradientBorder from "./ui/BadgeAnimatedGradientBorder"
import LinkText from "./ui/LinkText"
import Heading from "./ui/Heading"
import LogoLinks from "./ui/LogoLink"
import Email from "./ui/email"

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
    <section>
      <div className="flex flex-col items-center justify-start">
        <Image
          src={myImage}
          width={64}
          height={64}
          alt={name}
          className="rounded-full mb-3"
          priority
        />
        <p className="text-xl font-bold">{name}</p>
        <p className="text-lg font-medium text-muted/80">{role}</p>
        <div className="mt-3">
          <LogoLinks />
        </div>
      </div>
      <div className="mt-14">
        <Heading text="About me" />
        <div className="text-muted/80">
          <p>
            I&apos;m a software engineer, ambitious and open source enthusiast.
            I currently{" "}
            <Link
              href={"/work"}
              className="text-primary hover:underline underline-offset-2 cursor-pointer"
            >
              work
            </Link>{" "}
            at{" "}
            <BadgeAnimatedGradientBorder
              href={currentCompanyUrl}
              imageUrl={currentCompanyImage}
              imageAlt={currentCompany}
              text={currentCompany}
            />{" "}
            where I build web applications and contribute to open source.
          </p>
          <p>I am passionate about Web development and Generative AI.</p>
        </div>
      </div>
      <div className="mt-14">
        <Heading text="Contact" />
        <p className="text-muted/80">
          Connect with me on{" "}
          <LinkText
            href={links.linkedin}
            text="LinkedIn"
            className="text-primary"
          />
          , follow me on{" "}
          <LinkText href={links.twitter} text="X" className="text-primary" />,
          view my code and open-source projects on{" "}
          <LinkText
            href={links.github}
            text="GitHub"
            className="text-primary"
          />
          , or email me directly at <Email />.
        </p>
      </div>
    </section>
  )
}

export default Hero
