import React from 'react';
import birdsData from '../../../data/birds'
import { useDispatch, useSelector } from 'react-redux';
const List = () => {
    const dispatch = useDispatch();
    const level = useSelector(state => state.game.level);
    let clickButtons = birdsData[level].map((item) =>  <li>{item.name}</li>)
    return (
        <div className='list-block'>
            <ul>
                {clickButtons}
            </ul>
        </div>
    );
};

export default List;