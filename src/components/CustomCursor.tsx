import { useEffect, useState } from 'react'

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPressed, setIsPressed] = useState(false)
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = () => setIsPressed(true)
    const handleMouseUp = () => setIsPressed(false)

    const handleInteractiveElements = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      
      // Check if target OR any parent is interactive
      const interactiveElement = target.closest('a, button, input, textarea, [role="button"], .card')
      
      if (interactiveElement) {
        setIsHoveringInteractive(true)
        
        // Optional: Add visual feedback to the element
        interactiveElement.classList.add('cursor-hover')
        
        // Listen for when we leave this specific element
        const handleLeave = () => {
          setIsHoveringInteractive(false)
          interactiveElement.classList.remove('cursor-hover')
          interactiveElement.removeEventListener('mouseleave', handleLeave)
        }
        
        interactiveElement.addEventListener('mouseleave', handleLeave)
      } else {
        setIsHoveringInteractive(false)
      }
    }

    // Add mouseout event to reset when leaving the document
    const handleMouseOut = (e: MouseEvent) => {
      if (!e.relatedTarget || (e.relatedTarget as Node).nodeName === 'HTML') {
        setIsHoveringInteractive(false)
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseover', handleInteractiveElements)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseover', handleInteractiveElements)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  // Combine states for final cursor state
  const cursorActive = isPressed || isHoveringInteractive

  // Hide on mobile
  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    return null
  }

  return (
    <>
      <div
        className="fixed w-5 h-5 border border-[#7C3AED] rounded-full pointer-events-none z-9999 transition-all duration-200 mix-blend-difference"
        style={{
          left: position.x - 10, // Center the cursor
          top: position.y - 10,  // Center the cursor
          transform: cursorActive ? 'scale(1.5)' : 'scale(1)',
          backgroundColor: cursorActive ? 'rgba(124, 58, 237, 0.1)' : 'transparent',
          boxShadow: cursorActive ? '0 0 20px rgba(124, 58, 237, 0.5)' : 'none'
        }}
      />
      <div
        className="fixed w-2 h-2 bg-[#7C3AED] rounded-full pointer-events-none z-9999 transition-transform duration-150"
        style={{
          left: position.x - 4,
          top: position.y - 4,
          transform: cursorActive ? 'scale(0.5)' : 'scale(1)',
        }}
      />
      <style>{`
        body {
          cursor: none !important;
        }
        @media (max-width: 768px) {
          body {
            cursor: auto !important;
          }
        }
        /* Style for elements being hovered */
        .cursor-hover {
          position: relative;
        }
        .cursor-hover::after {
          content: '';
          position: absolute;
          top: -8px;
          left: -8px;
          right: -8px;
          bottom: -8px;
          border-radius: inherit;
          background: rgba(124, 58, 237, 0.1);
          pointer-events: none;
          z-index: -1;
        }
      `}</style>
    </>
  )
}