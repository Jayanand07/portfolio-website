"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">My academic journey and qualifications.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <GraduationCap className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>Bachelor of Computer Science</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div className="font-medium">Lovely Professional University</div>
                <div className="text-muted-foreground">Aug, 2023 - Jul, 2027</div>
              </div>
              <p className="text-muted-foreground">
                Currently pursuing my Bachelor's degree in Computer Science Engineering, focusing on software
                development, data structures, algorithms, and cloud technologies.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
