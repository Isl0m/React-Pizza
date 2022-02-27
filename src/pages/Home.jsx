import React from 'react';
import { Sort, Categories, PizzaBlock, PizzaLoadingBlock } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { setSortBy, setCategory } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const sortItems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавит', type: 'name', order: 'asc' },
];

const Home = () => {
  const dispatch = useDispatch();

  const { items, isLoaded, category, sortBy } = useSelector((state) => ({
    items: state.pizzas.items,
    isLoaded: state.pizzas.isLoaded,
    category: state.filters.category,
    sortBy: state.filters.sortBy,
  }));
  const cartItems = useSelector(({ cart }) => cart.items);

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddPizzaToCart = React.useCallback((obj) => {
    dispatch(addPizzaToCart(obj));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories items={categoryNames} category={category} onClickCategory={onSelectCategory} />
        <Sort activeSortType={sortBy.type} items={sortItems} onClickSortType={onSelectSortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
              <PizzaBlock
                onClickAddPizza={handleAddPizzaToCart}
                addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                key={obj.id}
                {...obj}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  );
};

export default Home;
