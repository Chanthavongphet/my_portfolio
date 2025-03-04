"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const skills = [
    "TypeScript",
    "Next.js",
    "Flutter",
    "React Native",
    "Node.js",
    "Express",
    "Postgres",
    "Firebase",
    "Git",
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="relative aspect-square max-w-md mx-auto md:mx-0 overflow-hidden rounded-2xl"
          >
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Professional headshot"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">I&apos;m Tah, a passionate Web & Mobile App Developer</h3>
            <p className="text-muted-foreground mb-6">
              With over 5 years of experience in the industry, I specialize in creating responsive websites and mobile
              applications that provide exceptional user experiences. My journey in tech began when I built my first
              website at 16, and I&apos;ve been hooked ever since.
            </p>
            <p className="text-muted-foreground mb-6">
              I hold a Bachelor&apos;s degree in Computer Science and have worked with clients ranging from startups to
              established enterprises. My approach combines technical expertise with creative problem-solving to deliver
              solutions that not only look great but also perform exceptionally well.
            </p>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">My Skills Include:</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

