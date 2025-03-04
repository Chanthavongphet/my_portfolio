"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

type Project = {
  id: number
  title: string
  description: string
  image: string
  category: string[]
  technologies: string[]
  demoUrl: string
  githubUrl: string
}

export default function Portfolio() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const projects: Project[] = [
    {
      id: 1,
      title: "AA Website",
      description:
        "A full-featured e-commerce website offering robust product management, seamless shopping cart functionality, and integrated payment processing.",
      image: "/aa.png?height=600&width=800",
      category: ["web"],
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "ICI Insurance for Adjusters",
      description:
        "A mobile app designed to help insurance adjusters efficiently track customer incidents and manage accident-related tasks.",
      image: "/no_image.png",
      category: ["mobile"],
      technologies: ["Flutter", "Firebase", "Google Fit API"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Real Estate Admin Panel",
      description:
        "An intuitive admin dashboard for real estate professionals to manage property listings, handle client inquiries, and analyze performance metrics.",
      image: "/no_image.png",
      category: ["web", "ui"],
      technologies: ["Next.js", "Tailwind CSS"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "ICI Insurance for Customers",
      description:
        "A mobile application that allows customers to quickly request assistance and track the dispatch of an adjuster during an accident.",
      image: "/no_image.png",
      category: ["mobile"],
      technologies: ["Flutter"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "LSR",
      description:
        "A mobile application delivering innovative functionalities and an intuitive user experience. More details coming soon.",
      image: "/lsr2.png?height=600&width=800",
      category: ["mobile"],
      technologies: ["Flutter"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "SPS Clinic",
      description:
        "A mobile platform designed for clinical teams, streamlining task management with real-time updates and seamless collaboration features.",
      image: "/no_image.png",
      category: ["mobile"],
      technologies: ["Flutter"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 7,
      title: "KSX",
      description:
        "A mobile app that aggregates news and trends relevant to the youth in Laos, providing timely updates on current events.",
      image: "/no_image.png",
      category: ["mobile"],
      technologies: ["Flutter"],
      demoUrl: "#",
      githubUrl: "#",
    },
    // {
    //   id: 8,
    //   title: "POS",
    //   description:
    //     "A personal project I built for my own restaurant",
    //   image: "/no_image.png",
    //   category: ["web"],
    //   technologies: ["NextJS"],
    //   demoUrl: "#",
    //   githubUrl: "#",
    // },    
  ];
  

  const [activeTab, setActiveTab] = useState("all")

  const filteredProjects =
    activeTab === "all" ? projects : projects.filter((project) => project.category.includes(activeTab))

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">My Portfolio</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was carefully crafted to meet specific client needs and solve
            real-world problems.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full mb-12" onValueChange={setActiveTab}>
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="web">Web Apps</TabsTrigger>
              <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-8">
            <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden h-full flex flex-col">
                    <div className="relative h-48 w-full">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    {/* <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    </CardFooter> */}
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

