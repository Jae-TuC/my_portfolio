import { motion } from 'motion/react'
import { ExternalLink, Zap, Code, Users, Palette, ChevronRight } from 'lucide-react'

interface Project {
  category: string
  title: string
  description: string
  technologies: string[]
  features: Array<{
    icon?: any
    text: string
  }>
  link?: string
  status?: string
  fullWidth?: boolean
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  if (project.fullWidth) {
    return (
      <motion.div 
        className={`card-shimmer card bg-gray-800/30 border border-gray-700 rounded-xl md:rounded-2xl p-4 sm:p-6 hover:border-purple-500/50 transition duration-200 group md:col-span-2`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
        viewport={{ once: true }}
        // whileHover={{ 
        //   scale: 1.02,
        //   boxShadow: '0 10px 30px rgba(147, 51, 234, 0.2)'
        // }}
      >
        <div className="mb-3 md:mb-4">
          <span className="font-mono text-xs sm:text-sm text-gray-400">{project.category}</span>
          <motion.h3 
            className="text-lg md:text-xl lg:text-2xl font-bold mt-1 md:mt-2 group-hover:text-purple-400 transition-colors"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            {project.title}
          </motion.h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          <div>
            <p className="text-gray-300 text-sm md:text-base mb-4 md:mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-1 md:gap-2 mb-4 md:mb-6">
              {project.technologies.map((tech, i) => (
                <motion.span 
                  key={tech}
                  className="px-2 py-1 bg-gray-700/50 rounded text-xs sm:text-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(147, 51, 234, 0.3)' }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
          
          <div className="space-y-3 md:space-y-4">
            <div className="bg-gray-800/50 rounded-lg p-3 md:p-4">
              <h4 className="font-bold text-gray-300 mb-2 text-sm md:text-base">Key Features</h4>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-400">
                {project.features.map((feature, i) => (
                  <motion.li 
                    key={feature.text}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                  >
                    <ChevronRight size={12} className="text-purple-400 shrink-0" />
                    <span>{feature.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 mt-4 md:mt-6">
          <a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 font-medium text-sm md:text-base"
          >
            <span>View Live Site</span>
            <ExternalLink size={14} />
          </a>
          {project.status && (
            <motion.span 
              className="text-xs sm:text-sm text-green-400 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {project.status}
            </motion.span>
          )}
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div 
      className="card-shimmer bg-gray-800/30 border border-gray-700 rounded-xl md:rounded-2xl p-4 sm:p-6 hover:border-purple-500/50 transition-all duration-300 group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.01,
        boxShadow: '0 10px 30px rgba(147, 51, 234, 0.2)'
      }}
    >
      <div className="mb-3 md:mb-4">
        <span className="font-mono text-xs sm:text-sm text-gray-400">{project.category}</span>
        <motion.h3 
          className="text-lg md:text-xl lg:text-2xl font-bold mt-1 md:mt-2 group-hover:text-purple-400 transition-colors"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3 }}
        >
          {project.title}
        </motion.h3>
      </div>
      
      <p className="text-gray-300 text-sm md:text-base mb-4 md:mb-6">{project.description}</p>
      
      <div className="mb-4 md:mb-6">
        <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
          {project.technologies.map((tech, i) => (
            <motion.span 
              key={tech}
              className="px-2 py-1 bg-gray-700/50 rounded text-xs sm:text-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(147, 51, 234, 0.3)' }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        <div className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-400">
          {project.features.map((feature, i) => (
            <motion.div 
              key={feature.text}
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
            >
              <feature.icon size={12} className="shrink-0" />
              <span>{feature.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
      
      {project.link && (
        <a 
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 font-medium text-sm md:text-base"
        >
          <span>Live Demo</span>
          <ExternalLink size={14} />
        </a>
      )}
    </motion.div>
  )
}

export const Projects = () => {
  const projects: Project[] = [
    {
      category: 'FULL-STACK AI',
      title: 'AI Podcast Generator',
      description: 'Full-stack app converting long videos into summarized podcasts with AI. Hybrid architecture using client-side FFmpeg.wasm + Python backend on Modal.',
      technologies: ['Next.js', 'TypeScript', 'Python', 'OpenAI', 'FFmpeg.wasm'],
      features: [
        { icon: Zap, text: 'Reduced processing time by 70% through intelligent video chunking' },
        { icon: Code, text: 'Integrated OpenAI Whisper & GPT for transcription & summarization' }
      ],
      link: 'https://ai-podcast-indol.vercel.app/login'
    },
    {
      category: 'CLOUD STORAGE',
      title: 'Keeplt',
      description: 'Secure file management platform with collaboration features. Features role-based access controls and atomic design components.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind', 'ShadCN UI', 'NextAuth'],
      features: [
        { icon: Users, text: 'Implemented auth with role-based access controls' },
        { icon: Palette, text: 'Created 10+ reusable components following atomic design' }
      ],
      link: 'https://keeplt-v1.vercel.app/sign-up'
    },
    {
      category: 'SHOWCASE WEBSITE',
      title: 'Car-Elecar (Electric Car Showcase)',
      description: 'A modern, responsive single-page website promoting Porsche electric vehicles with a clean, interactive UI.',
      technologies: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
      features: [
        { icon: ChevronRight, text: 'Fully responsive design' },
        { icon: ChevronRight, text: 'Interactive navigation & mobile menu' },
        { icon: ChevronRight, text: 'Clear product presentation with stats and pricing' }
      ],
      link: 'https://car-elecar.netlify.app/',
      status: 'STATUS: DEPLOYED',
      fullWidth: true
    }
  ]

  return (
    <section id="projects" className="py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-purple-400 text-xs sm:text-sm tracking-wider">SELECTED WORKS</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2">Featured Projects</h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}