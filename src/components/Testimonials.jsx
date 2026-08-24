import React, { useState, useEffect, useRef } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    quote: "PROXY transformed our Instagram presence completely. Going from 200 followers to 15K in three months — all organic. The consistency of their team is unmatched.",
    author: "Rahul Kapoor",
    role: "Founder, FitVerse India"
  },
  {
    quote: "We were skeptical about organic growth, but PROXY proved us wrong. Their dedicated team posted daily reels that felt authentic, and our engagement tripled within weeks.",
    author: "Priya Nair",
    role: "Marketing Head, UrbanCraft Studio"
  },
  {
    quote: "The flexibility is what sold us. We started with 2 people posting on Instagram, scaled to 5 across three platforms, and the pricing adapted perfectly to our budget.",
    author: "Arjun Mehta",
    role: "CEO, CloudNine Wellness"
  },
  {
    quote: "What I love about PROXY is the authenticity. The content doesn't feel like advertising — it feels real. That's exactly what today's audience responds to.",
    author: "Sneha Reddy",
    role: "Brand Director, Luxora Lifestyle"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="testimonials-section reveal-section" ref={sectionRef} id="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-label">TESTIMONIALS</span>
          <h2 className="section-title">Trusted by brands that value growth</h2>
        </div>

        <div className="testimonial-wrapper">
          <div className="testimonial-card">
            <span className="quote-icon">"</span>
            
            <div className="testimonial-content">
              {testimonials.map((test, index) => (
                <div 
                  key={index} 
                  className={`testimonial-slide ${index === activeIndex ? 'active' : ''}`}
                >
                  <p className="testimonial-quote">"{test.quote}"</p>
                  <div className="testimonial-author-info">
                    <h4 className="testimonial-author">{test.author}</h4>
                    <p className="testimonial-role">{test.role}</p>
                  </div>
                </div>
              ))}
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
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
