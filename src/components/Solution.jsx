import React from 'react';
import { motion } from 'framer-motion';
import './Solution.css';

const steps = [
  { id: '01', title: 'Discovery & Strategy', desc: 'We sit down with you to understand your brand, target audience, platforms, and goals. Together, we define the volume — how many posts, reels, shorts, or tweets per day across each platform.' },
  { id: '02', title: 'Team Assembly', desc: 'We assign dedicated individuals to your campaign. Each person operates from their own independent social media profile — creating authentic, organic presence that feels natural, not sponsored.' },
  { id: '03', title: 'Content Planning', desc: 'Your dedicated team creates a structured content calendar aligned with your brand voice. Every reel, short, and tweet is planned to maximize reach and engagement.' },
  { id: '04', title: 'Consistent Execution', desc: 'This is where the magic happens. Your team posts with clockwork consistency — because algorithms reward accounts that show up every single day without fail.' },
  { id: '05', title: 'Organic Growth', desc: 'No paid ads, no official pages needed. Natural traction builds as consistent, authentic content reaches real audiences who genuinely engage with your brand.' },
  { id: '06', title: 'Scale & Optimize', desc: 'Review performance metrics, adjust strategy, and scale up. Add more people, more platforms, or more content — pricing stays flexible to match your evolving needs.' }
];

const Solution = () => {
  return (
    <section className="solution-section" id="solution">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="section-label">OUR APPROACH</span>
          <h2 className="section-title">How we make your brand impossible to ignore</h2>
          <p className="section-subtitle">A systematic approach to organic social media growth</p>
        </motion.div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                className={`timeline-step ${isLeft ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: isLeft ? -80 : 80, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.1
                }}
              >
                <div className="timeline-content">
                  <div className="timeline-number">{step.id}</div>
                  <h3 className="timeline-title">{step.title}</h3>
                  <p className="timeline-desc">{step.desc}</p>
                </div>
                <div className="timeline-node"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solution;
