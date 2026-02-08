

export const Background = () => {
  return (
    <>
      {/* Grid Lines - matching sample.html */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Vertical Lines */}
        <div className="absolute top-0 bottom-0 left-[5vw] w-px bg-[#1e293b] opacity-30"></div>
        <div className="absolute top-0 bottom-0 left-[25vw] w-px bg-[#1e293b] opacity-30"></div>
        <div className="absolute top-0 bottom-0 left-[50vw] w-px bg-[#1e293b] opacity-30"></div>
        <div className="absolute top-0 bottom-0 left-[75vw] w-px bg-[#1e293b] opacity-30"></div>
        <div className="absolute top-0 bottom-0 right-[5vw] w-px bg-[#1e293b] opacity-30"></div>
        
        {/* Horizontal Lines */}
        <div className="absolute top-[15vh] left-0 right-0 h-px bg-[#1e293b] opacity-30"></div>
        <div className="absolute bottom-[15vh] left-0 right-0 h-px bg-[#1e293b] opacity-30"></div>
      </div>

      {/* Background gradients - matching sample.html */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 opacity-100"
          style={{
            background: `
              radial-gradient(circle at 15% 50%, rgba(124, 58, 237, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 85% 30%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)
            `
          }}
        />
      </div>
    </>
  )
}