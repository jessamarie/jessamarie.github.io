import React from 'react';
import Projects from './Projects';
import './Projects.scss';

function ProjectsPage() {
  function getTagNames(projectName, technologies) {
    return technologies.map(tech => {
      const TagName = tech.icon;
      return <TagName key={projectName * tech.label} size="25" title={tech.label} />;
    });
  }

  function ListItems() {
    if (Projects.length > 0) {
      return Projects.map(project => {
        const TagNames = getTagNames(project.name, project.technologies);
        return (
          <li key={project.id}>
            <a href={project.repo} target="_blank" rel="noopener noreferrer">
              <img src={project.imgName} width="300" height="150" alt={project.imgName} />
              <span>{project.name}</span>
              <span>{TagNames}</span>
            </a>
          </li>
        );
      });
    }

    return null;
  }

  const listItems = ListItems();
  const list = listItems ? <ul className="links-wrapper"> {listItems} </ul> : null;

  return <div className="ProjectsContainer">{list}</div>;
}

export default ProjectsPage;
