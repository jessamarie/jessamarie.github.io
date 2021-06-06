import React from 'react';
import Links from './Links';
import './Links.scss';

function LinkContainer() {
  function ListItems() {
    if (Links.length > 0) {
      return Links.map(link => {
        const TagName = link.icon;
        return (
          <li key={link.id}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <TagName size="25" title={link.label} />
            </a>
          </li>
        );
      });
    }

    return null;
  }

  const listItems = ListItems();
  const list = listItems ? <ul className="links-wrapper"> {listItems} </ul> : null;

  return <div className="LinkContainer">{list}</div>;
}

export default LinkContainer;
