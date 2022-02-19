import React from 'react';

const Sort = React.memo(({ items = [], activeSortType, onClickSortType }) => {
  const [isPopup, setPopup] = React.useState(false);
  const sortRef = React.useRef();
  const activeLabel = items.find((obj) => obj.type === activeSortType).name;

  const setSort = (obj) => {
    if (onClickSortType) {
      onClickSortType(obj);
    }
    setPopup(false);
  };

  const handleOutsideClick = (e) => {
    if (!e.path.includes(sortRef.current)) {
      setPopup(false);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  });

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          className={isPopup ? 'rotated' : ''}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setPopup(!isPopup)}>{activeLabel}</span>
      </div>
      {isPopup && (
        <div className="sort__popup">
          <ul>
            {items &&
              items.map((obj, idx) => (
                <li
                  key={`${obj.type}_${idx}`}
                  className={activeSortType === obj.type ? 'active' : ''}
                  onClick={() => setSort(obj)}>
                  {obj.name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
});

export default Sort;
