import { motion } from 'motion/react'
import { GraduationCap } from 'lucide-react'

export const Education = () => {
  return (
<section id="education" className="py-8 sm:py-12 md:py-16 px-4 sm:px-6" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="mb-6 sm:mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="mono text-xs sm:text-sm tracking-wider" style={{ color: 'var(--accent)' }}>ACADEMIC BACKGROUND</span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-2">Education</h2>
        </motion.div>
        
        <div className="max-w-xl mx-left">
          <motion.div 
            className="card-shimmer p-4 sm:p-5 md:p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.01,
              borderColor: 'var(--accent)',
              boxShadow: '0 5px 20px rgba(0, 0, 0, 0.3)'
            }}
          >
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-5">
              <motion.div 
                className="bg-purple-600/20 p-2.5 sm:p-3 shrink-0"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ 
                  backgroundColor: 'rgba(147, 51, 234, 0.3)',
                  scale: 1.1,
                }}
              >
                <GraduationCap className="text-purple-400" size={18} />
              </motion.div>
              
              <div className="text-left flex-1">
                <motion.h3 
                  className="text-lg sm:text-xl md:text-2xl font-bold mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  Bachelor of Science
                </motion.h3>
                <motion.p 
                  className="text-gray-400 font-mono mb-3 text-sm sm:text-base"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  University of Port Harcourt
                </motion.p>
                
                <motion.div 
                  className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 md:space-x-4 text-xs sm:text-sm text-gray-300"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <motion.span 
                    whileHover={{ color: '#c084fc' }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center space-x-1"
                  >
                    <span>📍</span>
                    <span>Port Harcourt, Nigeria</span>
                  </motion.span>
                  <motion.span 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    className="hidden sm:inline"
                  >
                    •
                  </motion.span>
                  <motion.span 
                    whileHover={{color: '#c084fc' }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center space-x-1"
                  >
                    <span>📅</span>
                    <span>Sept 2016 - Nov 2021</span>
                  </motion.span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}