import React from 'react';
import Skills from './Skills';
// import './Projects.css';
const styles = {
  marginRight: '4px'
};

function SkillsPage() {
  function ListItems() {
    if (Skills.length > 0) {
      return Skills.map(s => {
        const TagName = s.icon;

        return (
          <li key={s.id}>
            <TagName size="25" style={styles} title={s.label} />
            <span className="technology">{s.technology}</span>
          </li>
        );
      });
    }

    return null;
  }

  const listItems = ListItems();
  const list = listItems ? <ul className="links-wrapper"> {listItems} </ul> : null;

  return (
    <div className="SkillsContainer">
      <p>Here are some skills that I work with currently, or have used in the past.</p>
      {list}
    </div>
  );
}

export default SkillsPage;
