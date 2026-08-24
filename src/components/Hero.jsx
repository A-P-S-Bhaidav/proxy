import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import './Hero.css';

const AnimatedCounter = ({ value, suffix = '', label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.div className="hero-stat" ref={ref}>
      <motion.span 
        className="hero-stat-number"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {value}{suffix}
      </motion.span>
      <span className="hero-stat-label">{label}</span>
    </motion.div>
  );
};

const Hero = () => {
  const heroTitle = 'PROXY';
  
  const letterVariants = {
    hidden: { opacity: 0, y: 80, rotateX: -90 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.8,
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    })
  };

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 8}s`,
    animationDuration: `${6 + Math.random() * 8}s`,
    size: `${2 + Math.random() * 3}px`,
    opacity: 0.1 + Math.random() * 0.3
  }));

  return (
    <section id="home" className="hero">
      {/* Background effects */}
      <div className="hero-bg-grid"></div>
      <div className="hero-bg-orb hero-orb-1"></div>
      <div className="hero-bg-orb hero-orb-2"></div>
      <div className="hero-bg-orb hero-orb-3"></div>
      
      {/* Floating particles */}
      <div className="hero-particles">
        {particles.map(p => (
          <div
            key={p.id}
            className="hero-particle"
            style={{
              left: p.left,
              animationDelay: p.animationDelay,
              animationDuration: p.animationDuration,
              width: p.size,
              height: p.size,
              opacity: p.opacity
            }}
          />
        ))}
      </div>

      <div className="hero-content">
        {/* Main title with per-letter animation */}
        <motion.div 
          className="hero-title-wrapper"
          initial="hidden" 
          animate="visible"
        >
          <h1 className="hero-title">
            {heroTitle.split('').map((letter, i) => (
              <motion.span
                key={i}
                className="hero-letter"
                variants={letterVariants}
                custom={i}
                style={{ display: 'inline-block' }}
              >
                {letter}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        {/* Glowing divider */}
        <motion.div 
          className="hero-divider"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 200, opacity: 1 }}
          transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
        />

        {/* Label */}
        <motion.div
          className="hero-label"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          Branding & Marketing Agency
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          We bring the one thing your brand is missing — <span className="text-accent">consistency</span>. Dedicated teams, organic growth, zero ads.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="hero-ctas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          <Link to="/pricing" className="btn-primary">Start Your Campaign</Link>
          <a href="#solution" className="btn-secondary">See How It Works</a>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <AnimatedCounter value="50" suffix="+" label="Brands Scaled" />
          <div className="hero-stats-divider"></div>
          <AnimatedCounter value="10M" suffix="+" label="Organic Reach" />
          <div className="hero-stats-divider"></div>
          <AnimatedCounter value="99" suffix="%" label="Client Retention" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
      >
        <div className="scroll-indicator-inner">
          <span className="scroll-text">Scroll</span>
          <div className="scroll-line">
            <div className="scroll-dot"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
