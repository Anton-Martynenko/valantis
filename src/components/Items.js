import React from 'react';

const Items = (props) => {
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