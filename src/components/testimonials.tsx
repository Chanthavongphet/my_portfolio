"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Quote } from "lucide-react"

type Testimonial = {
  id: number
  name: string
  position: string
  company: string
  avatar: string
  testimonial: string
}

export default function Testimonials() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechStart Inc.",
      avatar: "/placeholder.svg?height=100&width=100",
      testimonial:
        "John developed our e-commerce platform from scratch and delivered an exceptional product. His attention to detail and technical expertise exceeded our expectations.",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Product Manager",
      company: "InnovateTech",
      avatar: "/placeholder.svg?height=100&width=100",
      testimonial:
        "Working with John was a pleasure. He understood our requirements perfectly and built a mobile app that our users love. His communication throughout the project was excellent.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Marketing Director",
      company: "GrowthBrand",
      avatar: "/placeholder.svg?height=100&width=100",
      testimonial:
        "John redesigned our website with a focus on conversion optimization. The results were immediate - our conversion rate increased by 40% within the first month.",
    },
    {
      id: 4,
      name: "David Wilson",
      position: "Founder",
      company: "FitTech",
      avatar: "/placeholder.svg?height=100&width=100",
      testimonial:
        "The fitness tracking app John built for us has received outstanding feedback from our users. His technical skills combined with his understanding of UX made all the difference.",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Client Testimonials</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here&apos;s what some of my clients have to say about working with me.
          </p>
        </div>

        <div ref={ref} className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-1"
                  >
                    <Card className="h-full">
                      <CardContent className="p-6 flex flex-col h-full">
                        <Quote className="h-8 w-8 text-primary/40 mb-4" />
                        <p className="text-muted-foreground mb-6 flex-grow">&quot;{testimonial.testimonial}&quot;</p>
                        <div className="flex items-center">
                          <Avatar className="h-12 w-12 mr-4">
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.position}, {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 -translate-x-1/2" />
            <CarouselNext className="right-0 translate-x-1/2" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}

