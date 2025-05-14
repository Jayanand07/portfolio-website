"use client"

import { motion } from "framer-motion"
import { Code, Database, Layout, Server, Shield, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    id: 1,
    title: "Programming & Development",
    icon: <Code className="h-8 w-8 text-primary" />,
    skills: ["Java", "C++", "Python (basic)", "HTML5", "CSS3", "JavaScript (Basics)", "React.js (beginner)"],
  },
  {
    id: 2,
    title: "System & Cloud",
    icon: <Server className="h-8 w-8 text-primary" />,
    skills: [
      "Linux (Ubuntu, Kali)",
      "Cloud Fundamentals (SaaS, IaaS, PaaS)",
      "Virtualization (VirtualBox, VMware)",
      "Oracle Fusion Cloud HCM",
    ],
  },
  {
    id: 3,
    title: "Networking & Security",
    icon: <Shield className="h-8 w-8 text-primary" />,
    skills: [
      "Networking (TCP/IP, OSI)",
      "DNS Configuration",
      "IP Configuration",
      "Cybersecurity Fundamentals",
      "System Security",
    ],
  },
  {
    id: 4,
    title: "Database & Version Control",
    icon: <Database className="h-8 w-8 text-primary" />,
    skills: ["SQL", "Git", "GitHub", "Version Control"],
  },
  {
    id: 5,
    title: "CS Fundamentals",
    icon: <Layout className="h-8 w-8 text-primary" />,
    skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "Operating Systems", "Computer Networks"],
  },
  {
    id: 6,
    title: "Soft Skills",
    icon: <Users className="h-8 w-8 text-primary" />,
    skills: [
      "Collaboration",
      "Problem-solving",
      "Communication",
      "Time management",
      "Result-oriented",
      "Public Speaking",
      "Research",
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and skills I've acquired throughout my journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader className="flex flex-row items-center gap-4">
                  {category.icon}
                  <div>
                    <CardTitle>{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 gap-x-4 gap-y-2">
                    {category.skills.map((skill) => (
                      <li key={skill} className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
