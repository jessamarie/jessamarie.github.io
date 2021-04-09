import React from 'react';
import Skills from './Skills';
// import './Projects.css';

function SkillsPage() {
  function ListItems() {
    if (Skills.length > 0) {
      return Skills.map(s => {
        // const TagName = s.icon;
        // <TagName size="25" title={link.label} />

        return <li key={s.id}>{s.technology}</li>;
      });
    }

    return null;
  }

  const listItems = ListItems();
  const list = listItems ? <ul className="links-wrapper"> {listItems} </ul> : null;

  return <div className="SkillsContainer">{list}</div>;
}

export default SkillsPage;
