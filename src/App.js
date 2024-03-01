import React, { useEffect, useState } from 'react';
import './App.css';
import Items from './components/Items';
import { cashedApi, getData, getUniqueIds } from './service/api';
import { Pagination } from './components/Pagination';
import { ModalWindow } from './components/Search';
import { Button } from './components/Button';

function App() {

  const [idsState, setIdsState] = useState([]);
  const [itemsState, setItemsState] = useState([]);
  const [startValue, setStartValue] = useState(0);
  const [endValue, setEndValue] = useState(50);
  const [isOpen, toggleIsOpen] = useState(false);
  const [filter, setFilter] = useState({});

  useEffect(() => {
    async function init() {
      let ids = await cashedApi('ids');
      setIdsState(getUniqueIds(ids));
      let items = await getData({
        action: 'get_items',
        params: { ids: ids.slice(startValue, endValue) },
      });
      setItemsState(items);
    }
    init();
  }, [startValue, endValue]);

  const search = async filterData => {
    let ids = await getData({
      action: 'filter',
      params: { ...filterData },
    });
    let items = await getData({
      action: 'get_items',
      params: { ids: ids.slice(startValue, endValue) },
    });
    setItemsState(items);
  };

  const setFilterAndSearch = filterData => {
    setFilter(filterData);
    let filter = Object.keys(filterData).reduce((acc, cur) => {
      if (filterData[cur]) {
        acc[cur] = filterData[cur];
        return { ...acc, [cur]: acc[cur] };
      }
      return acc;
    }, {});

    search(filter);
  };

  const increasePage = () => {
    setStartValue(startValue + 50);
    setEndValue(endValue + 50);
  };

  const decreasePage = () => {
    setStartValue(startValue - 50);
    setEndValue(endValue - 50);
  };

  // const filteredByBrand = () => {
  //   let filteredByBrandProducts = [];
  //   setItemsState(filteredByBrandProducts);
  // }

  let itemStateForUsers =
    itemsState.length > 0
      ? itemsState.map(i => (
          <Items id={i.id} brand={i.brand != null ? i.brand : ''} price={i.price} product={i.product} />
        )) : '';

  return (
    <div className="app-wrapper">
      <div className="app-wrapper-content">{itemStateForUsers}</div>
      <Pagination idsState={idsState} increasePage={increasePage} decreasePage={decreasePage} />
      <ModalWindow
        isOpened={isOpen}
        toggleOpen={toggleIsOpen}
        filters={filter}
        setFilter={setFilterAndSearch}
      />
      <Button click={() => toggleIsOpen(true)} text={'Фильтры'} />
    </div>
  );
}

export default App;
