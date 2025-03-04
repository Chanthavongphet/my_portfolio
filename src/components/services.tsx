"use client"

import type React from "react"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Smartphone, Database, LineChart } from "lucide-react"

type Service = {
  icon: React.ReactNode
  title: string
  description: string
}

export default function Services() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const services: Service[] = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies that are fast, responsive, and user-friendly.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.",
    },
    // {
    //   icon: <Palette className="h-10 w-10 text-primary" />,
    //   title: "UI/UX Design",
    //   description:
    //     "User-centered design solutions that are visually appealing, intuitive, and enhance user engagement.",
    // },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Backend Development",
      description: "Robust server-side applications, APIs, and database solutions that power your digital products.",
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "Performance Optimization",
      description: "Improve the speed and efficiency of your existing applications for better user experience and SEO.",
    },
    // {
    //   icon: <Rocket className="h-10 w-10 text-primary" />,
    //   title: "Technical Consulting",
    //   description: "Expert advice on technology stack, architecture, and development strategies for your projects.",
    // },
  ]

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">My Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I offer a comprehensive range of development and design services to help bring your digital ideas to life.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-primary/10 mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

