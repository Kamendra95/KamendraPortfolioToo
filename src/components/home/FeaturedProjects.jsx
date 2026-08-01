import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProjectCard from '../projects/ProjectCard';
import projectsData from '../../data/projects.json';
import './FeaturedProjects.css';

const FeaturedProjects = () => {
  const featuredProjects = projectsData.projects.slice(0, 3);

  return (
    <section className="featured-projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="view-all">
            <Link to="/projects" className="btn btn-primary">View All Projects</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;