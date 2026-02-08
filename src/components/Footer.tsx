import { motion } from 'motion/react'
import { Github, Twitter, Mail, Download } from 'lucide-react'

export const Footer = () => {
  const socialLinks = [
    {
      href: 'mailto:jeatuc21@gmail.com',
      icon: Mail,
      title: 'Email'
    },
    {
      href: 'https://github.com/Jae-TuC',
      icon: Github,
      title: 'GitHub'
    },
    {
      href: 'https://x.com/codingJae',
      icon: Twitter,
      title: 'Twitter/X'
    }
  ]

  return (
    <motion.footer 
      className="py-8 md:py-12 px-4 sm:px-6 border-t border-gray-800"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-3 lg:mb-4">
              <motion.div 
                className="w-2 h-2 bg-purple-500 rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
              />
              <span className="text-xs sm:text-sm font-mono text-purple-400">JUSTICE_ANYAOGU</span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm">
              Senior Frontend Engineer • Nigeria • Available for Contracts
            </p>
          </motion.div>
          
          <motion.div 
            className="flex space-x-4 sm:space-x-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.title}
                href={link.href}
                className="text-gray-400 hover:text-purple-400 transition-colors"
                title={link.title}
                target={link.title !== 'Email' ? '_blank' : undefined}
                rel={link.title !== 'Email' ? 'noopener noreferrer' : undefined}
                whileHover={{ 
                  scale: 1.1,
                  color: '#c084fc'
                }}
                whileTap={{ scale: 0.9 }}
              >
                <link.icon size={18} />
              </motion.a>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button 
              className="px-4 sm:px-6 py-2 border border-gray-700 hover:border-purple-500 rounded-lg font-mono text-xs sm:text-sm transition-all duration-300 flex items-center space-x-2"
              whileHover={{ 
                scale: 1.01,
                borderColor: '#9333ea',
                boxShadow: '0 5px 15px rgba(147, 51, 234, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                // Add CV download functionality
                window.alert('CV download functionality to be implemented')
              }}
            >
              <Download size={14} />
              <span>DOWNLOAD CV</span>
            </motion.button>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-800 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} Justice Anyaogu. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}