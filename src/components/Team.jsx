import React from 'react';
import { motion } from 'framer-motion';
import './Team.css';

const teamMembers = [
  {
    name: "Anant Pratap Singh Bhaidav",
    role: "Founder & CEO",
    email: "mailto:anantbhaidav@gmail.com",
    linkedin: "https://www.linkedin.com/in/anant-bhaidav/",
    phone: "tel:+919968359499",
    gradient: "linear-gradient(135deg, #c9a96e, #8B6914)",
    initial: "A"
  },
  {
    name: "Bhowmik Ahuja",
    role: "Co-Founder & Operations",
    email: "mailto:bhowmik@proxy.agency",
    linkedin: "https://www.linkedin.com/in/bhowmik-ahuja7/",
    phone: "tel:+918517801653",
    gradient: "linear-gradient(135deg, #4e4376, #2b5876)",
    initial: "B"
  },
  {
    name: "Atharav Arya",
    role: "Co-Founder & Strategy",
    email: "mailto:atharav@proxy.agency",
    linkedin: "https://www.linkedin.com/in/atharav-arya-b8471336a/",
    phone: "tel:+917895824004",
    gradient: "linear-gradient(135deg, #11998e, #38ef7d)",
    initial: "A"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const Team = () => {
  return (
    <section className="team-section" id="team">
      <div className="team-container">
        <div className="team-header">
          <span className="section-label">OUR TEAM</span>
          <h2 className="section-title">The people behind PROXY</h2>
          <p className="section-subtitle">
            A passionate team dedicated to transforming your brand's social media presence.
          </p>
        </div>
        
        <motion.div 
          className="team-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {teamMembers.map((member, index) => (
            <motion.div className="team-card" key={index} variants={cardVariants}>
              <div className="avatar-wrapper">
                <div 
                  className="avatar" 
                  style={{ background: member.gradient }}
                >
                  {member.initial}
                </div>
              </div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <div className="member-links">
                <a href={member.email} className="contact-link" aria-label="Email">✉</a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="LinkedIn">in</a>
                <a href={member.phone} className="contact-link" aria-label="Phone">📞</a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
