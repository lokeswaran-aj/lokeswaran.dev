import React from "react"

type Props = {
  text: string
}

const Heading = (props: Props) => {
  const { text } = props
  return <h2 className="mb-4 font-bold">{text}</h2>
}

export default Heading
