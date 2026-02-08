import { motion } from 'motion/react'
import { Code, Zap, Users, Briefcase, Rocket, Sparkles } from 'lucide-react'

export const About = () => {
  const featureCards = [
    {
      icon: Briefcase,
      title: 'Experience',
      description: '4+ years of professional experience building production-grade applications with React ecosystem.'
    },
    {
      icon: Rocket,
      title: 'Approach',
      description: 'Component-driven development, performance optimization, and scalable architecture design.'
    },
    {
      icon: Sparkles,
      title: 'Focus',
      description: 'Modern React practices, TypeScript, state management, and creating exceptional user experiences.'
    }
  ]

  const coreValues = [
    { icon: Code, label: 'Clean Code' },
    { icon: Zap, label: 'Performance' },
    { icon: Users, label: 'Mentorship' }
  ]

  return (
    <section id="about" className="py-20 px-6 bg-gray-800/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-purple-400 text-xs md:text-sm tracking-wider">PROFESSIONAL SUMMARY</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2">About Me</h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.p 
              className="text-gray-300 text-base md:text-lg mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Frontend Engineer with hands-on experience since 2020, building modern web applications with React.js and Next.js. 
              Skilled in creating reusable UI components, scalable frontend architectures, and visually appealing, 
              performance-optimized user interfaces.
            </motion.p>
            
            <motion.p 
              className="text-gray-300 text-base md:text-lg mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Experienced in modern frontend workflows and mentoring developers while delivering reliable, 
              production-ready solutions. Combines technical expertise with leadership capabilities.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-3 md:gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {coreValues.map((value, index) => (
                <motion.div 
                  key={value.label}
                  className="flex items-center space-x-2 text-purple-400"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                >
                  <value.icon size={18} />
                  <span className="font-medium text-sm md:text-base">{value.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="space-y-4 md:space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {featureCards.map((card, index) => (
              <motion.div 
                key={card.title}
                className="card-shimmer bg-gray-800/50 border border-gray-700 rounded-xl p-4 md:p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02, 
                  borderColor: '#9333ea',
                  boxShadow: '0 0 20px rgba(147, 51, 234, 0.2)'
                }}
              >
                <div className="flex items-center space-x-3 mb-3 md:mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <card.icon className="text-purple-400" size={20} />
                  </motion.div>
                  <h3 className="text-lg md:text-xl font-bold">{card.title}</h3>
                </div>
                <p className="text-gray-300 text-sm md:text-base">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}