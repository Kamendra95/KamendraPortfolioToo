import { useState } from 'react';
import ProjectCard from '../components/projects/ProjectCard';
import projectsData from '../data/projects.json';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const projects = projectsData.projects;

  const categories = ['all', ...new Set(projects.flatMap(p => p.technologies))];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.technologies.includes(filter));

  return (
    <main className="projects-page">
      <div className="container">
        <h1>My Projects</h1>
        <p className="projects-subtitle">
          Here are some of my recent work. Each project is built with passion and attention to detail.
        </p>
        
        <div className="filter-buttons">
          {categories.slice(0, 8).map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;