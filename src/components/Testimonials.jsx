import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Testimonials.css';

const testimonials = [
  { quote: 'PROXY transformed our Instagram presence completely. Going from 200 followers to 15K in three months — all organic. The consistency of their team is unmatched.', author: 'Rahul Kapoor', role: 'Founder, FitVerse India' },
  { quote: 'We were skeptical about organic growth, but PROXY proved us wrong. Their dedicated team posted daily reels that felt authentic, and our engagement tripled within weeks.', author: 'Priya Nair', role: 'Marketing Head, UrbanCraft Studio' },
  { quote: 'The flexibility is what sold us. We started with 2 people posting on Instagram, scaled to 5 across three platforms, and the pricing adapted perfectly to our budget.', author: 'Arjun Mehta', role: 'CEO, CloudNine Wellness' },
  { quote: 'What I love about PROXY is the authenticity. The content doesn\'t feel like advertising — it feels real. That\'s exactly what today\'s audience responds to.', author: 'Sneha Reddy', role: 'Brand Director, Luxora Lifestyle' }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
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
