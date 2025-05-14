"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const certifications = [
  {
    id: 1,
    title: "Linux for System Administrators",
    issuer: "Udemy",
    status: "Completed",
  },
  {
    id: 2,
    title: "Front-End Web Development with React",
    issuer: "Coursera",
    status: "Completed",
  },
  {
    id: 3,
    title: "Oracle Fusion Cloud HCM Foundations",
    issuer: "Oracle",
    status: "In Progress",
  },
  {
    id: 4,
    title: "Reliable Services & Data Link Controls",
    issuer: "Coursera",
    status: "Completed",
  },
  {
    id: 5,
    title: "Medium Access Controls",
    issuer: "Coursera",
    status: "Completed",
  },
  {
    id: 6,
    title: "Frame & Packet Switching",
    issuer: "Coursera",
    status: "Completed",
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and courses I've completed to enhance my skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Award className="h-6 w-6 text-primary" />
                  <div>
                    <CardTitle className="text-base">{cert.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{cert.issuer}</span>
                    <span className={`text-sm ${cert.status === "In Progress" ? "text-amber-500" : "text-green-500"}`}>
                      {cert.status}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
