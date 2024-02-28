import React, {useState} from 'react';

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
            <button onClick={changePageDown}>Назад</button>
            <span>{pageNumber}</span>
            <button onClick={changePageUp}>Вперед</button>
        </div>
    )
}