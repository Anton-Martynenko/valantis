import React from 'react';

export type ItemsPropsType = {
    brand: string,
    product: string,
    price: string
}

const Items = (props: ItemsPropsType) => {
    return (
            <div>
                <div >

                    {`Бренд: ${props.brand}`}
                    <div>
                        {props.price}
                    </div>
                    <div>
                        {props.product}
                    </div>
                </div>
            </div>
    )
}

export default Items;