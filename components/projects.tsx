"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A personal site built with HTML & Tailwind CSS, deployed on Vercel to showcase my skills and journey.",
    image: "/Screenshot 2025-05-14 194625.png",
    tags: ["HTML", "Tailwind CSS", "Vercel"],
    liveUrl: "#",
    githubUrl: "https://github.com/Jayanand07",
  },
  {
    id: 2,
    title: "Chatbot Input Processor",
    description: "A Java module that processes chatbot input using string operations and conditional logic.",
    image: "/AI-powered-chatbot.png",
    tags: ["Java", "String Operations", "Conditional Logic"],
    githubUrl: "https://github.com/Jayanand07",
  },
  {
    id: 3,
    title: "RSA + AES Hybrid Encryption System",
    description:
      "Encrypts both text and image files using RSA & AES encryption techniques. Frontend built with HTML/CSS, backend in Java.",
    image: "/encrypt.png",
    tags: ["Java", "HTML/CSS", "Encryption", "RSA", "AES"],
    githubUrl: "https://github.com/Jayanand07",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my projects that showcase my skills and experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden group">
                <div className="relative overflow-hidden aspect-video">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </CardContent>
                <CardFooter className="mt-auto pt-4">
                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <Button size="sm" asChild>
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Link>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <Link href="https://github.com/Jayanand07" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              See More on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
