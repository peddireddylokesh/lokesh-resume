<<<<<<< HEAD
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
=======
// Save this as App.js in a React project created with create-react-app

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> 1de1fcc (initial commit)

const resumeData = {
  name: 'Peddireddy Lokesh',
  email: 'peddireddylokesh999@gmail.com',
  phone: '8247736449',
  professionalSummary: `DevOps Engineer with strong knowledge of Linux administration, cloud platforms (AWS), automation, scripting, and monitoring tools. 
  Eager to apply my technical skills and contribute to scalable infrastructure and deployment automation in a fast-paced environment. 
  Proven ability to troubleshoot systems, implement automation, and support DevOps pipelines.`,
  keySkills: [
    'Linux System Administration',
    'Cloud Platform: AWS',
    'Monitoring & Observability: Prometheus, Grafana, Splunk, ELK',
    'Scripting: Python, Bash, PowerShell',
    'Docker & Kubernetes (Basics)',
    'Automation and Troubleshooting',
    'Incident Response and Root Cause Analysis',
    'Documentation and Best Practices',
  ],
  projects: [
    {
      title: 'Cloud Infrastructure Optimization',
      role: 'DevOps Learner',
      description: `Worked on optimizing cloud infrastructure to enhance performance and reliability using AWS services.`,
      technologies: ['AWS', 'Python', 'Bash', 'Prometheus', 'Grafana'],
      responsibilities: [
        'Automated infrastructure provisioning and monitoring setup.',
        'Resolved common configuration issues and ensured security best practices.',
      ],
    },
  ],
  education: 'Sri Vedha College of Engineering and Technology, B.Tech, 2022',
  tools: [
    'Cloud: AWS',
    'Monitoring: Prometheus, Grafana, Splunk, ELK',
    'Scripting: Python, Bash, PowerShell',
    'Container Basics: Docker, Kubernetes',
  ],
};

const SectionTitle = ({ children }) => (
<<<<<<< HEAD
  <motion.h2
    className="border-bottom border-primary pb-2 mb-4 text-primary"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    {children}
  </motion.h2>
=======
  <h2 className="border-bottom border-primary pb-2 mb-4 text-primary">{children}</h2>
>>>>>>> 1de1fcc (initial commit)
);

function App() {
  return (
<<<<<<< HEAD
    <motion.div
      className="container my-5 p-4 bg-white shadow rounded"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.header
        className="mb-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
=======
    <div className="container my-5 p-4 bg-white shadow rounded">
      <header className="mb-4">
>>>>>>> 1de1fcc (initial commit)
        <h1 className="text-primary">{resumeData.name}</h1>
        <p>
          <strong>Email:</strong> {resumeData.email} | <strong>Phone:</strong> {resumeData.phone}
        </p>
<<<<<<< HEAD
      </motion.header>

      <section className="mb-5">
        <SectionTitle>Professional Summary</SectionTitle>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {resumeData.professionalSummary}
        </motion.p>
=======
      </header>

      <section className="mb-5">
        <SectionTitle>Professional Summary</SectionTitle>
        <p>{resumeData.professionalSummary}</p>
>>>>>>> 1de1fcc (initial commit)
      </section>

      <section className="mb-5">
        <SectionTitle>Key Skills</SectionTitle>
<<<<<<< HEAD
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {resumeData.keySkills.map((skill, i) => (
            <motion.li
              key={i}
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.4 }}
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>
=======
        <ul>
          {resumeData.keySkills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
>>>>>>> 1de1fcc (initial commit)
      </section>

      <section className="mb-5">
        <SectionTitle>Projects</SectionTitle>
        {resumeData.projects.map((project, i) => (
<<<<<<< HEAD
          <motion.div
            key={i}
            className="mb-4 p-3 border rounded"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
======= 
          <div key={i} className="mb-4">
>>>>>>> 1de1fcc (initial commit)
            <h5>{project.title}</h5>
            <p>
              <strong>Role:</strong> {project.role}
              <br />
              <strong>Description:</strong> {project.description}
              <br />
              <strong>Technologies Used:</strong> {project.technologies.join(', ')}
            </p>
            <ul>
              {project.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
<<<<<<< HEAD
          </motion.div>
======= 
          </div>
>>>>>>> 1de1fcc (initial commit)
        ))}
      </section>

      <section className="mb-5">
        <SectionTitle>Education</SectionTitle>
<<<<<<< HEAD
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {resumeData.education}
        </motion.p>
======= 
        <p>{resumeData.education}</p>
>>>>>>> 1de1fcc (initial commit)
      </section>

      <section>
        <SectionTitle>Tools & Technologies</SectionTitle>
<<<<<<< HEAD
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {resumeData.tools.map((tool, i) => (
            <motion.li
              key={i}
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.4 }}
            >
              {tool}
            </motion.li>
          ))}
        </motion.ul>
      </section>
    </motion.div>
======= 
        <ul>
          {resumeData.tools.map((tool, i) => (
            <li key={i}>{tool}</li>
          ))}
        </ul>
      </section>
    </div>
>>>>>>> 1de1fcc (initial commit)
  );
}

export default App;
