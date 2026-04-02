"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "trawell AI-powered Trip Advisor",
    description: "A modern web application that helps users plan their trips using AI-powered recommendations.",
    tech: ["JavaScript", "React", "Node.js", "Firebase","AI"],
    image: "/images/trawell.png",
    video: "/video/trawell.mp4",
    link: "https://github.com/devpatel21-03/trawell",
  },
  {
    id: 2,
    title: "TRAFFIC MANAGEMENT SYSTEM",
    description: "Mahine learning based traffic management system using computer vision lowering traffic congestion by 76%",
    tech: ["Python", "TensorFlow","OpenCV","YOLO","Flask"],
    image: "/images/project2.png",
    video: "/video/project2.mp4",
    link: "https://github.com/devpatel21-03/TRAFFIC-MANAGEMENT-SYSTEM",
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
          Projects
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Click any project below to explore more.
        </p>
      </motion.div>

      {/* Project Cards Grid */}
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedProject(project)}
            className="group relative aspect-video bg-gray-900 rounded-xl overflow-hidden cursor-pointer shadow-2xl"
          >
            {/* Image Background */}
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Play Icon */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Icon icon="mdi:play" width={32} height={32} className="text-white" />
              </div>
            </div>

            {/* Title at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
              >
                <Icon icon="mdi:close" width={24} height={24} />
              </button>

              <div className="grid md:grid-cols-2">
                {/* Video Side */}
                <div className="aspect-video md:aspect-auto md:h-full bg-black">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    poster={`/images/project${selectedProject.id}.jpg`}
                  >
                    <source src={selectedProject.video} type="video/mp4" />
                  </video>
                </div>

                {/* Info Side */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <span className="inline-block w-fit px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-4">
                    Project
                  </span>

                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                    {selectedProject.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 text-sm font-medium bg-white/10 text-gray-300 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Link Button */}
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    View Project
                    <Icon icon="mdi:arrow-right" width={20} height={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
