import { motion } from 'motion/react'
import { ChevronRight } from 'lucide-react'

interface ExperienceItem {
  period: string
  title: string
  company: string
  achievements: string[]
}

const ExperienceTimeline = ({ item, index }: { item: ExperienceItem; index: number }) => {
  return (
    <motion.div 
      className="relative pl-6 sm:pl-8 border-l border-gray-700"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="absolute -left-1.5 sm:-left-2.25 top-0 w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 rounded-full"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.5 }}
      />
      
      <motion.div 
        className="mb-3 md:mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
        viewport={{ once: true }}
      >
        <span className="font-mono text-xs sm:text-sm text-gray-400">{item.period}</span>
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold mt-1 md:mt-2">{item.title}</h3>
        <p className="text-gray-400 font-mono text-sm md:text-base">{item.company}</p>
      </motion.div>
      
      <div className="space-y-3 md:space-y-4">
        {item.achievements.map((achievement, i) => (
          <motion.div 
            key={achievement}
            className="flex items-start space-x-2 sm:space-x-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 + i * 0.1 + index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ x: 5 }}
          >
            <ChevronRight size={14} className="text-purple-400 mt-1 shrink-0" />
            <p className="text-gray-300 text-sm md:text-base">{achievement}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      period: '2020 — PRESENT',
      title: 'Frontend Engineer',
      company: 'Freelance & Contract · Remote',
      achievements: [
        'Worked with clients to take web products live: marketing sites, dashboards, and authenticated apps in React.js and Next.js — from first screens to a deployed URL they could share.',
        'Sat in on scope and revision rounds, translated design files into working UI, and shipped the changes clients actually needed instead of overbuilding.',
        'Built TypeScript APIs with Express.js and Nest.js when a project needed login, file handling, or server logic — so the frontend was not stuck on mock data.',
        'Left behind reusable components and clear state (Zustand / Redux) so the next feature did not mean rewriting the same screens.'
      ]
    },
    {
      period: '2023 — PRESENT',
      title: 'Frontend Instructor',
      company: 'Independent mentoring · Remote',
      achievements: [
        'Taught React.js, Next.js, and TypeScript through real project work: setup, features, bugs, and deploy — not slideshow-only classes.',
        'Reviewed student code, explained what was broken in plain language, and stayed with them until the app was on the internet.',
        'Covered how frontends talk to APIs so juniors could plug into a real backend instead of hard-coding every screen.'
      ]
    }
  ]

  return (
    <section id="experience" className="py-16 md:py-20 px-4 sm:px-6 bg-gray-800/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-purple-400 text-xs sm:text-sm tracking-wider">PROFESSIONAL JOURNEY</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2">Work Experience</h2>
        </motion.div>
        
        <div className="space-y-8 md:space-y-12">
          {experiences.map((experience, index) => (
            <ExperienceTimeline key={experience.title} item={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}