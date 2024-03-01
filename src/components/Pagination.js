import React, {useState} from 'react';
import {Button} from './Button';
import './Pagination.css';

export const Pagination = (props) => {

    const [pageNumber, setPageNumber] = useState(1);

    let pageSize = 50;

    const changePageUp = () => {
        if (Math.ceil(props.idsState.length / pageSize) > pageNumber) {
            props.increasePage();
            setPageNumber(pageNumber + 1);
        }
    }

    const changePageDown = () => {
        if (pageNumber > 1) {
            props.decreasePage();
            setPageNumber(pageNumber - 1);
        }
    }

    return (
        <div>
            <Button click={changePageDown} text={'Назад'}/>
            <span className='pageNumber'>{pageNumber}</span>
            <Button click={changePageUp} text={'Вперед'}/>
        </div>
    )
}