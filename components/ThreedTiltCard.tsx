import React, { useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glow?: boolean;
}

const ThreedTiltCard: React.FC<Props> = ({ children, className = '', intensity = 10, glow = false }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation: invert X for natural tilt
    const rotateXValue = ((y - centerY) / centerY) * -intensity; 
    const rotateYValue = ((x - centerX) / centerX) * intensity;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
    setGlarePosition({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div 
      ref={ref}
      className={`relative transition-all duration-200 ease-out preserve-3d will-change-transform ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
      }}
    >
      {children}
      
      {/* Glare Effect */}
      {glow && (
        <div 
            className="absolute inset-0 pointer-events-none rounded-xl mix-blend-overlay transition-opacity duration-300"
            style={{
                background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 80%)`,
                opacity: isHovered ? 1 : 0,
                zIndex: 50,
            }}
        />
      )}
    </div>
  );
};

export default ThreedTiltCard;