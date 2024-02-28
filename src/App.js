import React, { useEffect, useState } from 'react';
import './App.css';
import Items from './components/Items';
import { cashedApi, getData, getUniqueIds } from './service/api';
import {Pagination} from "./components/Pagination";
import {Search} from "./components/Search";

function App() {
  const [idsState, setIdsState] = useState([]);
  const [itemsState, setItemsState] = useState([]);
  const [startValue, setStartValue] = useState(0);
  const [endValue, setEndValue] = useState(50);

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

  const increasePage = () => {
    setStartValue(startValue + 50);
    setEndValue(endValue + 50);
  };

  const decreasePage = () => {
    setStartValue(startValue - 50);
    setEndValue(endValue - 50);
  }

  const filteredByBrand = () => {
    let filteredByBrandProducts = [];
    setItemsState(filteredByBrandProducts);
  }

  let itemStateForUsers =
    itemsState.length > 0
      ? itemsState.map(i => (
          <Items brand={i.brand != null ? i.brand : ''} price={i.price} product={i.product} />
        ))
      : '';

  return (
    <div className="app-wrapper">
      <div className="app-wrapper-content">{itemStateForUsers}</div>
      <Pagination idsState={idsState}
                  increasePage={increasePage}
                  decreasePage={decreasePage}/>
      <Search filteredByBrand={filteredByBrand}/>
    </div>
  );
}

export default App;
