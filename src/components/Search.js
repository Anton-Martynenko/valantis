import React from 'react';
import Popup from 'reactjs-popup';
import './Search.css';

export const Search = (props) => {

    const toSearchByBrand = () => {
        props.filteredByBrand();
    }

    const toSearchByPrice = () => {

    }

    const toSearchByProductName = () => {

    }

    return (
        <div>
            <Popup trigger=
                       {<button> Поиск </button>}
                   modal
                   nested
                   position="right center">
                {close => (
                <div>
                    <button className="close" onClick={close}>
                        &times;
                    </button>
                </div>
                    )}
                <div>Начните удобный поиск</div>
                <div>
                    <input placeholder="Введите бренд"/>
                    <button onClick={toSearchByBrand}>Искать</button>
                </div>
                <div>
                    <input placeholder="Введите цену"/>
                    <button onClick={toSearchByPrice}>Искать</button>
                </div>
                <div>
                    <input placeholder="Введите название товара"/>
                    <button onClick={toSearchByProductName}>Искать</button>
                </div>
            </Popup>
        </div>
    )
}