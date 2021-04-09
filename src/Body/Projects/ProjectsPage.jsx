import React from 'react';
import Projects from './Projects';
// import './Projects.css';

function ProjectsPage() {
  function ListItems() {
    if (Projects.length > 0) {
      return Projects.map(project => {
        // const TagName = project.icon;
        return (
          <li key={project.id}>
            <a href={project.repo} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
            {/* <TagName size="25" title={project.technologies} /> */}
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
