"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <Image
              src="/IMG_5816.JPG"
              alt="Jay Anand"
              width={400}
              height={400}
              className="rounded-lg object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-muted-foreground mb-4">
              I'm an enthusiastic and dedicated Computer Science Engineering student at Lovely Professional University
              with a strong foundation in programming, operating systems, computer networks, and cybersecurity.
            </p>
            <p className="text-muted-foreground mb-4">
              Proficient in Java, C++, and familiar with Linux environments and cloud platforms like Oracle HCM. I'm
              passionate about system administration and information security, with hands-on experience in building
              small-scale projects and participating in tech workshops.
            </p>
            <p className="text-muted-foreground mb-6">
              Currently based in New Delhi, India, I'm actively seeking opportunities to apply my skills in real-world
              scenarios and contribute to innovative technology solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="#contact">Get In Touch</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://drive.google.com/file/d/15BCs-uc77YMxhAYDb0dPpo43FvNCjSbS/view" target="_blank" rel="noopener noreferrer">
                  Download Resume
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
