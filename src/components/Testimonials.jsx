import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Testimonials.css';

const testimonials = [
  {
    quote: 'PROXY completely redefined how we approach brand visibility. Within four months, our LinkedIn went from 200 followers to over 12,000, and the inbound leads tripled. Their dedicated team posted every single day without fail — the consistency was extraordinary. For a B2B SaaS startup, this kind of organic traction is worth its weight in gold.',
    author: 'Rishav Rajak',
    role: 'Co-founder, PeakAI'
  },
  {
    quote: 'When we brought PROXY on board, Zlice was just another food delivery app trying to get noticed. They deployed eight advocates who flooded Instagram and YouTube with the most authentic food content I have ever seen. 45K followers and 18K app downloads in six months — all organic. They made us look like we were everywhere.',
    author: 'Arnab Jena',
    role: 'Co-founder, Zlice'
  },
  {
    quote: 'What sets PROXY apart is the sheer execution. They do not just plan — they deliver, every single day. The food reels their team created felt so genuine that people did not even realize it was a campaign. Our brand awareness in Delhi NCR went through the roof. The ROI on their service is unmatched.',
    author: 'Sohail Belim',
    role: 'Co-founder, Zlice'
  },
  {
    quote: 'Building a new cosmetics brand from scratch is brutal — consumers do not trust new skincare products easily. PROXY understood this perfectly. They created authentic, community-driven content from independent profiles that felt real because it was real. 38K followers and over 22 lakhs in revenue in just five months. I cannot recommend them enough.',
    author: 'Kavya Sharma',
    role: 'Founder & CEO, Ocean'
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="section-label">TESTIMONIALS</span>
          <h2 className="section-title">Trusted by brands that value growth</h2>
        </motion.div>

        <motion.div
          className="testimonial-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="testimonial-card">
            <span className="quote-icon">&ldquo;</span>
            <div className="testimonial-content">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="testimonial-slide-active"
                >
                  <p className="testimonial-quote">&ldquo;{testimonials[activeIndex].quote}&rdquo;</p>
                  <div className="testimonial-author-info">
                    <h4 className="testimonial-author">{testimonials[activeIndex].author}</h4>
                    <p className="testimonial-role">{testimonials[activeIndex].role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
