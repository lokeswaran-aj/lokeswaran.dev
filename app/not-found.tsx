import BackButton from "@/components/ui/BackButton"

export default function NotFound() {
  return (
    <section>
      <BackButton link="/" />
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        Oh no! This page doesn't exist.
      </h1>
    </section>
  )
}
