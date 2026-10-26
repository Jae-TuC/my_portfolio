import { motion } from 'motion/react'
import { Mail, Github } from 'lucide-react'

export const Hero = () => {
  const skills = ['React.js / Nextjs', 'TypeScript', 'Express.js / Nestjs', 'Tailwind', 'Redux', 'Zustand']

  return (
    <section id="home" className="min-h-screen pt-30 md:pt-40 pb-16 md:pb-0 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <motion.div 
              className="mb-4 md:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                className="font-mono text-purple-400 text-xs sm:text-sm tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                SENIOR FRONTEND ENGINEER
              </motion.span>
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mt-2 md:mt-4 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                JUSTICE
                <motion.span 
                  className="block text-purple-400"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  ANYAOGU
                </motion.span>
              </motion.h1>
            </motion.div>
            
            <motion.p 
              className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Building modern web applications with React.js & Next.js. 
              Creating scalable frontend architectures and performance-optimized user interfaces.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {[
                { label: 'EXPERIENCE', value: '5+ Years' },
                { label: 'PROJECTS', value: '5+ Production' },
                { label: 'TECHNOLOGY', value: 'Modern Stack' }
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="border-l-2 p-2 sm:p-3 md:p-4 text-center"
                  style={{ borderColor: 'var(--accent)' }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="mono text-xs sm:text-sm md:text-base" style={{ color: 'var(--text-secondary)' }}>{stat.label}</div>
                  <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold" style={{ 
                    background: 'var(--accent-gradient)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>{stat.value}</div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.a 
                href="mailto:jeatuc21@gmail.com"
                className="px-4 sm:px-6 py-2 md:py-3 bg-purple-600 hover:bg-purple-700 rounded-4xl font-medium flex items-center justify-center space-x-2 transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={16} />
                <span className="text-sm">Get In Touch</span>
              </motion.a>
              <motion.a 
                href="https://github.com/Jae-TuC"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-6 py-2 md:py-3 border border-gray-700 hover:border-purple-500 rounded-4xl font-medium flex items-center justify-center space-x-2 transition-all"
                whileHover={{ scale: 1.01, borderColor: '#9333ea' }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={16} />
                <span className="text-sm">View GitHub</span>
              </motion.a>
            </motion.div>
          </div>
          
          <motion.div 
            className="relative mt-8 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div 
              className="absolute inset-0 gradient-to-r from-purple-600/20 to-blue-600/20 blur-2xl md:blur-3xl"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            />
            <motion.div 
              className="relative card-shimmer p-3 sm:p-4 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <motion.div 
                      className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div 
                      className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, delay: 0.2, repeat: Infinity }}
                    />
                    <motion.div 
                      className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, delay: 0.4, repeat: Infinity }}
                    />
                  </div>
                  <span className="mono text-xs sm:text-sm" style={{ color: 'var(--accent)' }}>TERMINAL</span>
                </div>
                
                <div className="font-mono space-y-1 md:space-y-2">
                  <motion.div 
                    className="text-green-400 text-xs sm:text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                  >
                    $ justice --profile
                  </motion.div>
                  {[
                    ' Role: Senior Frontend Engineer',
                    ' Location: Nigeria (Remote)',
                    ' Status: Available for contracts'
                  ].map((line, index) => (
                    <motion.div 
                      key={line}
                      className="text-blue-400 text-xs sm:text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                    >
                      {line}
                    </motion.div>
                  ))}
                  <motion.div 
                    className="text-green-400 mt-2 md:mt-4 text-xs sm:text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.6 }}
                  >
                    $ justice --skills
                  </motion.div>
                  <motion.div 
                    className="flex flex-wrap gap-1 md:gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.8 }}
                  >
                    {skills.map((skill, index) => (
                      <motion.span 
                        key={skill}
                        className="px-2 py-1 bg-gray-700/50 rounded text-xs sm:text-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 2.0 + index * 0.1 }}
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(147, 51, 234, 0.3)' }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}