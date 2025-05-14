"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    id: 1,
    title: "Cybersecurity Learner",
    company: "Cybersecurity Fundamentals – Coursera / IBM",
    period: "Jan, 2025 - Feb, 2025",
    description: [
      "Completed in-depth modules on network security, threat intelligence, and system vulnerabilities.",
      "Gained practical knowledge of firewalls, encryption, and incident response workflows.",
      "Simulated vulnerability detection and mitigation using basic penetration testing tools.",
      "Developed an understanding of security policies, compliance, and risk assessment.",
    ],
  },
  {
    id: 2,
    title: "HCM Cloud Systems Learner",
    company: "Oracle Fusion Cloud HCM Foundations – Oracle University",
    period: "Mar, 2025 - Apr, 2025",
    description: [
      "Explored Core HR, Global Workforce Structures, and Payroll modules through guided labs.",
      "Learned to navigate Oracle HCM dashboard, manage employee data, and configure approval hierarchies.",
      "Understood the architecture of SaaS-based HRMS and its role in enterprise-level workforce management.",
      "Developed foundational skills in cloud-based system administration and security roles.",
      "Completed Oracle Fusion Cloud HCM Foundations Certification with practical simulation tasks.",
    ],
  },
  {
    id: 3,
    title: "Linux System Administration Trainee (Self-Learning)",
    company: "Linux & System Administration Projects – Self-Learning / Udemy / Great Learning",
    period: "Dec, 2024 - Jan, 2024",
    description: [
      "Installed and configured Ubuntu and Kali Linux in virtual sandbox environments for practice.",
      "Managed user accounts, groups, file permissions, and filesystem hierarchy through CLI.",
      "Performed package installations and system maintenance using apt and yum tools.",
      "Practiced process management, system resource monitoring (top, htop, ps, etc.).",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">My professional experience and learning journey.</p>
        </motion.div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <CardTitle>{experience.title}</CardTitle>
                  </div>
                  <CardDescription>
                    <div className="flex flex-col md:flex-row justify-between">
                      <span className="font-medium">{experience.company}</span>
                      <span>{experience.period}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {experience.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                        <span>{item}</span>
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
