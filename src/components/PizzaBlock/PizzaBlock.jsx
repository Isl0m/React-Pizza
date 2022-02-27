import React from 'react';
import cn from 'classnames';
import Button from '../Button';

const typesName = ['тонкое', 'традиционное'];
const sizeName = [26, 30, 40];

const PizzaBlock = ({ id, imageUrl, name, price, sizes, types, onClickAddPizza, addedCount }) => {
  const [activeType, setActiveType] = React.useState(types[0]);
  const [activeSize, setActiveSize] = React.useState(0);

  const onAddPizza = () => {
    const obj = {
      id,
      name,
      imageUrl,
      price,
      type: typesName[activeType],
      size: sizeName[activeSize],
    };
    onClickAddPizza(obj);
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {typesName.map((type, idx) => (
            <li
              key={`${type}_${idx}`}
              className={cn({
                active: activeType === idx,
                disabled: !types.includes(idx),
              })}
              onClick={() => setActiveType(idx)}>
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {sizeName.map((size, idx) => (
            <li
              key={`${size}_${idx}`}
              className={cn({
                active: activeSize === idx,
                disabled: !sizes.includes(size),
              })}
              onClick={() => setActiveSize(idx)}>
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <Button uniclass="button--outline button--add" onClick={onAddPizza}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {addedCount && <i>{addedCount}</i>}
        </Button>
      </div>
    </div>
  );
};

export default PizzaBlock;
