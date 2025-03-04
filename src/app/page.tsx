import Hero from "@/components/hero"
import Portfolio from "@/components/portfolio"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

