import React from 'react';
import { motion } from 'framer-motion';
import './Team.css';

const teamMembers = [
  {
    name: 'Anant Pratap Singh Bhaidav',
    email: 'anantbhaidav@gmail.com',
    linkedin: 'https://www.linkedin.com/in/anant-bhaidav/',
    phone: '+91 9968359499'
  },
  {
    name: 'Bhowmik Ahuja',
    email: 'bhowmik@proxy.agency',
    linkedin: 'https://www.linkedin.com/in/bhowmik-ahuja7/',
    phone: '+91 8517801653'
  },
  {
    name: 'Atharav Arya',
    email: 'atharav@proxy.agency',
    linkedin: 'https://www.linkedin.com/in/atharav-arya-b8471336a/',
    phone: '+91 7895824004'
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="section-label">CONTACT</span>
          <h2 className="section-title">Get in touch</h2>
          <p className="section-subtitle">
            Ready to scale your brand? Reach out to our team directly.
          </p>
        </motion.div>

        <motion.div
          className="contact-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              className="contact-card"
              key={index}
              variants={cardVariants}
            >
              <h3 className="contact-name">{member.name}</h3>
              <div className="contact-details">
                <a href={`mailto:${member.email}`} className="contact-detail-row">
                  <span className="contact-icon">✉</span>
                  <span>{member.email}</span>
                </a>
                <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="contact-detail-row">
                  <span className="contact-icon">☎</span>
                  <span>{member.phone}</span>
                </a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="contact-detail-row">
                  <span className="contact-icon">in</span>
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
