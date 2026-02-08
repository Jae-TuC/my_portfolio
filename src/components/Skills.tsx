import { motion } from 'motion/react'
import { Code, Palette, Zap, Briefcase, ChevronRight } from 'lucide-react'

interface SkillCategory {
  title: string
  icon: any
  skills: string[]
}

interface TechnicalHighlight {
  title: string
  description: string
}

const SkillCard = ({ category, index }: { category: SkillCategory; index: number }) => {
  return (
    <motion.div 
      className="card-shimmer bg-gray-800/30 border border-gray-700 rounded-lg xl:rounded-xl p-4 sm:p-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      viewport={{ once: true }}
      whileHover={{ 
        borderColor: '#9333ea',
        boxShadow: '0 10px 30px rgba(147, 51, 234, 0.2)'
      }}
    >
      <motion.div 
        className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6"
        whileHover={{ x: 5 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <category.icon className="text-purple-400" size={20} />
        </motion.div>
        <h3 className="text-lg sm:text-xl font-bold">{category.title}</h3>
      </motion.div>
      
      <ul className="space-y-2 sm:space-y-3">
        {category.skills.map((skill, i) => (
          <motion.li 
            key={skill}
            className="flex items-center space-x-2 text-gray-300 text-sm sm:text-base"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.1 + index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ x: 5, color: '#c084fc' }}
          >
            <ChevronRight size={14} className="text-purple-400 shrink-0" />
            <span>{skill}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

const HighlightCard = ({ highlight, index }: { highlight: TechnicalHighlight; index: number }) => {
  return (
    <motion.div 
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div 
        className="text-purple-400 text-base sm:text-lg font-bold mb-2"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        {highlight.title}
      </motion.div>
      <p className="text-gray-400 text-xs sm:text-sm">{highlight.description}</p>
    </motion.div>
  )
}

export const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Languages & Frameworks',
      icon: Code,
      skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'React.js', 'Next.js', 'Vite.js']
    },
    {
      title: 'UI/UX Development',
      icon: Palette,
      skills: ['Tailwind CSS', 'ShadCN UI', 'Chakra UI', 'Responsive Design', 'Design Systems', 'Figma Collaboration']
    },
    {
      title: 'State & Data',
      icon: Zap,
      skills: ['Zustand', 'Redux', 'REST APIs', 'Axios', 'Fetch API', 'Zod (Validation)']
    },
    {
      title: 'Tools & Architecture',
      icon: Briefcase,
      skills: ['Git & GitHub', 'Vite', 'Webpack', 'SEO (Next.js)', 'Component-Driven Architecture', 'Code Review', 'Technical Mentoring']
    }
  ]

  const technicalHighlights: TechnicalHighlight[] = [
    {
      title: 'Component Architecture',
      description: 'Expert in building scalable, reusable component libraries and design systems'
    },
    {
      title: 'Technical Leadership',
      description: 'Combines hands-on development with mentoring and best practice establishment'
    },
    {
      title: 'UX Collaboration',
      description: 'Experience working with designers to implement pixel-perfect, accessible interfaces'
    }
  ]

  return (
    <section id="skills" className="py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-purple-400 text-xs sm:text-sm tracking-wider">TECHNICAL EXPERTISE</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2">Skills & Technologies</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
        
        <motion.div 
          className="card-shimmer mt-12 md:mt-16 bg-gray-800/30 border border-gray-700 rounded-xl lg:rounded-2xl p-6 sm:p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ 
            borderColor: '#9333ea',
            boxShadow: '0 20px 40px rgba(147, 51, 234, 0.15)'
          }}
        >
          <motion.h3 
            className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Technical Highlights
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {technicalHighlights.map((highlight, index) => (
              <HighlightCard key={highlight.title} highlight={highlight} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}