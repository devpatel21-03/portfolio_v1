"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const technologies = [
  // Programming Languages
  { name: "Python", icon: "logos:python" },
  { name: "Java", icon: "logos:java" },
  { name: "JavaScript", icon: "logos:javascript" },
  
  // AI/ML & Data
  { name: "TensorFlow", icon: "logos:tensorflow" },
  { name: "PyTorch", icon: "logos:pytorch" },
  { name: "OpenCV", icon: "logos:opencv" },
  { name: "YOLO", icon: "mdi:face-recognition" },
  
  // Web & Frameworks
  { name: "React", icon: "logos:react" },
  { name: "Next.js", icon: "logos:nextjs-icon" },
  { name: "Flask", icon: "simple-icons:flask" },
  { name: "Node.js", icon: "logos:nodejs-icon" },
  
  // Core CS
  { name: "DSA", icon: "mdi:code-brackets" },
  { name: "Git", icon: "logos:git-icon" },
  { name: "Firebase", icon: "logos:firebase" },
];

export default function OverviewSection() {
  return (
    <section id="overview" className="py-20 relative">
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-100px" }}
         transition={{ duration: 0.6 }}
         className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
          Overview
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          I enjoy turning ideas into working code and exploring the "why" behind tools and technologies. Building a strong foundation in programming and expanding my understanding through coursework and personal projects.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
         <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
         >
            <h3 className="text-2xl font-bold mb-6 dark:text-white">What I Do</h3>
            <ul className="space-y-4">
               {[
                 { title: "AI & Machine Learning", desc: "Exploring PyTorch and TensorFlow, building projects with computer vision using YOLO and OpenCV.", icon: "mdi:brain" },
                 { title: "Data Structures & Algorithms", desc: "Actively learning DSA, algorithms, and statistics to think clearly about problem-solving approaches.", icon: "mdi:code-brackets" },
                 { title: "Full-Stack Development", desc: "Building scalable web applications with React, Next.js, Node.js, and Flask.", icon: "mdi:web" },
                 { title: "Python & Java Programming", desc: "Comfortable with Python and Java, excited by the possibilities for software and AI development.", icon: "mdi:language-python" }
               ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start p-4 rounded-2xl bg-white/40 dark:bg-gray-800/40 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-md transition-shadow">
                     <div className="mt-1 p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex-shrink-0">
                        <Icon icon={item.icon} width={24} height={24} />
                     </div>
                     <div>
                        <h4 className="font-semibold text-lg dark:text-gray-100">{item.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm leading-relaxed">{item.desc}</p>
                     </div>
                  </li>
               ))}
            </ul>
         </motion.div>

         <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-50/50 dark:bg-gray-800/20 rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 h-full flex flex-col justify-center"
         >
            <h3 className="text-2xl font-bold mb-8 dark:text-white text-center">Core Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 gap-4 lg:gap-6">
               {technologies.map((tech, idx) => (
                  <motion.div
                     key={idx}
                     whileHover={{ scale: 1.05, y: -5 }}
                     className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700"
                  >
                     <Icon icon={tech.icon} width={36} height={36} />
                     <span className="text-xs font-medium dark:text-gray-300 text-center">{tech.name}</span>
                  </motion.div>
               ))}
            </div>
         </motion.div>
      </div>
    </section>
  );
}
