import React from 'react';
import {Button} from './Button';
import './Pagination.css';

export const Pagination = (props) => {

    let pageSize = 50;

    const changePageUp = () => {
        if (Math.ceil(props.idsState.length / pageSize) > props.pageNumber) {
            props.increasePage();
            props.setPageNumber(props.pageNumber + 1);
        }
    }

    const changePageDown = () => {
        if (props.pageNumber > 1) {
            props.decreasePage();
            props.setPageNumber(props.pageNumber - 1);
        }
    }

    return (
        <div>
            <Button click={changePageDown} text={'Назад'}/>
            <span className='pageNumber'>{props.pageNumber}</span>
            <Button click={changePageUp} text={'Вперед'}/>
        </div>
    )
}