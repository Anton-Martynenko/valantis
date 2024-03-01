import React from 'react';
import './Items.css';

const Items = (props) => {
    return (
        <div className='items'>
            <div>
                {`Артикул: ${props.id}`}
            </div>
            <div>
                {`Бренд: ${props.brand}`}
            </div>
            <div>
                {`Цена: ${props.price}`}
            </div>
            <div>
                {`Наименование: ${props.product}`}
            </div>
        </div>
    )
}

export default Items;