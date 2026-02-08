import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Mail, Menu, X } from 'lucide-react'

interface NavigationProps {
  activeSection: string
}

export const Navigation = ({ activeSection }: NavigationProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [navHeight, setNavHeight] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    // Get the height of the navigation for offset
    const updateNavHeight = () => {
      const nav = document.querySelector('nav')
      if (nav) {
        setNavHeight(nav.offsetHeight)
      }
    }

    updateNavHeight()
    window.addEventListener('resize', updateNavHeight)

    return () => {
      window.removeEventListener('resize', updateNavHeight)
    }
  }, [])

  useEffect(() => {
    setIsVisible(true)

    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const element = document.getElementById(sectionId)
    if (!element) {
      console.warn(`Element with id "${sectionId}" not found`)
      return
    }

    // Calculate the target position with offset
    const elementRect = element.getBoundingClientRect()
    const elementTop = elementRect.top + window.pageYOffset

    // Add a buffer for better visibility
    const offset = navHeight + 20

    const targetPosition = elementTop - offset

    // Scroll to the section
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })

    // For accessibility, focus the element
    setTimeout(() => {
      element.focus({ preventScroll: true })
    }, 500)
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault()
    console.log(`Navigating to section: ${section}`)

    // Close mobile menu
    if (window.innerWidth <= 768) {
      setIsMobileMenuOpen(false)
    }

    // Scroll to section with a small delay to ensure menu closes first
    setTimeout(() => {
      scrollToSection(section.toLowerCase())
    }, window.innerWidth <= 768 ? 100 : 0)
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b"
      style={{ backgroundColor: 'rgba(10, 10, 10, 0.9)', borderColor: 'var(--border-color)' }}
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: 'var(--accent)' }}
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
            <span className="text-xs sm:text-sm font-mono" style={{ color: 'var(--accent)' }}>JUSTICE_ANYAOGU</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex lg:flex xl:flex space-x-6 lg:space-x-8 xl:space-x-12">
            {['Home', 'About', 'Projects', 'Experience', 'Skills', 'Education'].map((item, index) => (
              <motion.div
                key={item}
                className="relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <motion.a
                  href={`#${item.toLowerCase()}`}
                  className={`font-mono text-xs sm:text-sm transition-colors duration-300 relative z-10 ${activeSection === item.toLowerCase()
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                    }`}
                  onClick={(e) => handleNavClick(e, item.toLowerCase())}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.toUpperCase()}
                </motion.a>
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 origin-left"
                  style={{
                    backgroundColor: 'var(--accent)',
                    transformOrigin: 'left'
                  }}
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: activeSection === item.toLowerCase() ? 1 : 0,
                    transition: { duration: 0.3, ease: 'easeInOut' }
                  }}
                  whileHover={{ scaleX: 1 }}
                />
              </motion.div>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            {!isMobile && (
              <motion.button
                className="btn-pill"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('mailto:jeatuc21@gmail.com')}
              >
                <Mail size={12} className="mr-2" />
                <span>CONTACT</span>
              </motion.button>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <motion.button
                className="p-2 transition-colors"
                style={{ color: 'var(--text-secondary)' }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute left-0 right-0 top-full z-50"
            style={{
              backgroundColor: 'rgba(10, 10, 10, 0.98)',
              borderBottom: '1px solid var(--border-color)',
              backdropFilter: 'blur(10px)'
            }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 sm:px-6 py-6">
              <div className="flex flex-col space-y-4 max-w-md mx-auto text-center">
                {['Home', 'About', 'Projects', 'Experience', 'Skills', 'Education'].map((item, index) => {
                  const sectionId = item.toLowerCase()

                  return (
                    <motion.a
                      key={item}
                      href={`#${sectionId}`}
                      className={`font-mono text-sm transition-all duration-300 px-4 py-3 rounded-lg ${activeSection === sectionId
                        ? 'text-white bg-purple-900/30'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                      onClick={(e) => handleNavClick(e, sectionId)}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.toUpperCase()}
                    </motion.a>
                  )
                })}

                {/* Mobile Contact Button */}
                <motion.button
                  className="flex items-center justify-center btn-pill"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('mailto:jeatuc21@gmail.com')}
                >
                  <Mail size={12} className="mr-2" />
                  <span>CONTACT</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}