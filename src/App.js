import React, { useEffect, useState } from 'react';
import './App.css';
import Items from './components/Items';
import { cashedApi, getData, getUniqueIds } from './service/api';

function App() {
  const [idsState, setIdsState] = useState([]);
  const [itemsState, setItemsState] = useState([]);
  // const [startValue, setStartValue] = useState(0);
  // const [endValue, setEndValue] = useState(48);

  useEffect(() => {
    async function init() {
      let ids = await cashedApi('ids');
      setIdsState(getUniqueIds(ids));
      let items = await getData({
        action: 'get_items',
        params: { ids: [...ids.splice(0, 50)] },
      });
      setItemsState(items);
    }
    init();
  }, []);

  let itemStateForUsers =
    itemsState.length > 0
      ? itemsState.map(i => (
          <Items brand={i.brand != null ? i.brand : ''} price={i.price} product={i.product} />
        ))
      : '';

  return (
    <div className="app-wrapper">
      <div className="app-wrapper-content">{itemStateForUsers}</div>
    </div>

    /*<Example/>
      <GetIds/>*/
  );
}

export default App;
