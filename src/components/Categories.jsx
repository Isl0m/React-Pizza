import React from 'react';

const Categories = React.memo(({ items = [], category = null, onClickCategory }) => {
  return (
    <div className="categories">
      <ul>
        <li onClick={() => onClickCategory(null)} className={category === null ? 'active' : ''}>
          Все
        </li>
        {items &&
          items.map((name, idx) => (
            <li
              key={name}
              onClick={() => onClickCategory(idx)}
              className={category === idx ? 'active' : ''}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;
