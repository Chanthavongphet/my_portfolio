"use client"

import type React from "react"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Server, Globe, Smartphone, Github, FileCode, Package } from "lucide-react"

type TechStack = {
  name: string
  icon: React.ReactNode
  category: "frontend" | "backend" | "mobile" | "other"
}

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const techStack: TechStack[] = [
    // Frontend
    { name: "HTML/CSS", icon: <Globe className="h-8 w-8" />, category: "frontend" },
    { name: "JavaScript", icon: <FileCode className="h-8 w-8" />, category: "frontend" },
    { name: "React", icon: <div className="text-blue-500">⚛️</div>, category: "frontend" },
    { name: "Next.js", icon: <div className="text-black dark:text-white">◆</div>, category: "frontend" },
    { name: "TypeScript", icon: <div className="text-blue-600">TS</div>, category: "frontend" },
    { name: "Tailwind CSS", icon: <div className="text-cyan-500">🌊</div>, category: "frontend" },

    // Backend
    { name: "Node.js", icon: <Server className="h-8 w-8" />, category: "backend" },
    { name: "Express", icon: <Code className="h-8 w-8" />, category: "backend" },
    { name: "MongoDB", icon: <Database className="h-8 w-8" />, category: "backend" },
    { name: "SQL", icon: <Database className="h-8 w-8" />, category: "backend" },
    { name: "Firebase", icon: <div className="text-yellow-500">🔥</div>, category: "backend" },
    // { name: "GraphQL", icon: <div className="text-pink-600">◈</div>, category: "backend" },

    // Mobile
    { name: "React Native", icon: <Smartphone className="h-8 w-8" />, category: "mobile" },
    { name: "Flutter", icon: <div className="text-blue-400">🦋</div>, category: "mobile" },

    // Other
    { name: "Git/GitHub", icon: <Github className="h-8 w-8" />, category: "other" },
    { name: "Docker", icon: <Package className="h-8 w-8" />, category: "other" },
  ]

  const categories = [
    { id: "frontend", name: "Frontend Technologies" },
    { id: "backend", name: "Backend Technologies" },
    { id: "mobile", name: "Mobile Development" },
    { id: "other", name: "Tools & Design" },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">My Tech Stack</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to build amazing digital experiences.
          </p>
        </div>

        <div ref={ref} className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-6">{category.name}</h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {techStack
                  .filter((tech) => tech.category === category.id)
                  .map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: techIndex * 0.05 + categoryIndex * 0.1 }}
                    >
                      <Card className="h-full">
                        <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                          <div className="mb-3 text-primary">{tech.icon}</div>
                          <p className="font-medium">{tech.name}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

