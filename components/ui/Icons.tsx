import { HTMLAttributes } from "react"

type IconProps = HTMLAttributes<SVGElement>
const Icons = {
  logo: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      stroke="#000"
      strokeWidth={0.001}
      aria-hidden="true"
      className="iconify iconify--emojione-monotone"
      viewBox="0 0 64 64"
      {...props}
    >
      <path d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30 30-13.432 30-30S48.568 2 32 2zm11.275 44.508h-20.55V17.492h6.063v23.799h14.488v5.217z" />
    </svg>
  ),
  arrow: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={12}
      fill="none"
      className="inline-block ml-1"
      {...props}
    >
      <path
        fill="currentColor"
        d="M2.071 11.35.963 10.241l8.239-8.253H2.838L2.852.455h8.992V9.46h-1.548l.014-6.363-8.239 8.252Z"
      />
    </svg>
  ),
  github: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      stroke="#fff"
      viewBox="0 0 24 24"
      {...props}
    >
      <g strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
        <path d="M9.292 21v-2.56l.034-1.818a2.57 2.57 0 0 1 .64-1.53.026.026 0 0 0-.017-.043v0C7.526 14.745 5 13.723 5 9.267a4.718 4.718 0 0 1 1.075-3.082v0a.144.144 0 0 0 .024-.142 4.531 4.531 0 0 1 .114-2.964.1.1 0 0 1 .074-.064v0c.215-.038 1.083-.09 2.746 1.058l.158.111v0a.155.155 0 0 0 .132.023l.005-.001c.089-.025.178-.05.268-.072a9.747 9.747 0 0 1 5.062.068l.006.002a.183.183 0 0 0 .156-.027v0l.147-.104c1.659-1.145 2.522-1.097 2.738-1.058v0a.102.102 0 0 1 .076.064l.005.013a4.507 4.507 0 0 1 .113 2.955v0a.152.152 0 0 0 .032.145l.065.08A4.718 4.718 0 0 1 19 9.267c0 4.48-2.544 5.476-4.979 5.748v0a.017.017 0 0 0-.01.029l.01.012c.246.274.437.598.56.954.13.372.182.77.154 1.165V21" />
        <path d="M4 17a2.452 2.452 0 0 1 1.784 1.208 2.5 2.5 0 0 0 1.495 1.196 2.483 2.483 0 0 0 1.9-.218" />
      </g>
    </svg>
  ),
  twitter: (props: IconProps) => (
    <svg
      {...props}
      height="12"
      viewBox="0 0 1200 1227"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
      />
    </svg>
  ),
  linkedIn: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="#FFF"
      viewBox="0 0 30 30"
      {...props}
    >
      <path d="M9 25H4V10h5v15zM6.501 8a2.5 2.5 0 1 1 0-5.001A2.5 2.5 0 0 1 6.5 8zM27 25h-4.807v-7.3c0-1.741-.033-3.98-2.499-3.98-2.503 0-2.888 1.896-2.888 3.854V25H12V9.989h4.614v2.051h.065c.642-1.18 2.211-2.424 4.551-2.424 4.87 0 5.77 3.109 5.77 7.151V25z" />
    </svg>
  ),
  resume: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="#FFF"
      viewBox="0 0 50 50"
      {...props}
    >
      <path d="M7 2v46h36V14.594l-.281-.313-12-12L30.406 2Zm2 2h20v12h12v30H9Zm22 1.438L39.563 14H31ZM15 22v2h20v-2Zm0 6v2h16v-2Zm0 6v2h20v-2Z" />
    </svg>
  ),
}
export default Icons
