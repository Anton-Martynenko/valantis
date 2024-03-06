import React, {useState} from 'react';
import {Button} from './Button';
import './Search.css';

export const ModalWindow = (props) => {
    return props.isOpened ? (
        <SearchForm toggleOpen={props.toggleOpen} filters={props.filters} setFilter={props.setFilter}/>
    ) : (
        <div></div>
    );
};

const SearchForm = (props) => {
    const [brand, setBrand] = useState(props.filters?.brand ?? '');
    const [price, setPrice] = useState(props.filters?.price ?? '');
    const [product, setProduct] = useState(props.filters?.product ?? '');

    const setFilters = () => {
        props.setFilter({brand, price, product});
        props.toggleOpen(false);
    };

    return (
        <div className="search-wrap">
            <div>
                <div className="search-form">
                    <button className="search-form__close" onClick={() => props.toggleOpen(false)}>
                        X
                    </button>
                    <h3>Начните удобный поиск</h3>

                    <input
                        placeholder="Введите бренд"
                        value={brand}
                        onInput={e => setBrand(e.currentTarget.value)}
                    />
                    <input
                        placeholder="Введите цену"
                        value={price}
                        onInput={e => setPrice(Number(e.currentTarget.value))}
                    />
                    <input
                        placeholder="Введите название товара"
                        value={product}
                        onInput={e => setProduct(e.currentTarget.value)}
                    />
                    <Button text={'Поиск'} click={setFilters}/>
                </div>
            </div>
        </div>
    );
};
