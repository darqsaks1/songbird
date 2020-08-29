import React from 'react';
import List from './list/List'
import About from './about/About'
import ButtonPlay from './button-play/ButtonPlay'

const Main = (props) => {

    const {
        currentBird, setCurrentBird,
    } = props;
    return (
        <div className='main-block'>
            <div className='space-between'>
                <List
                    currentBird={currentBird}
                />
                <About />
            </div>
            <ButtonPlay
                currentBird={currentBird}
                setCurrentBird={setCurrentBird}
            />
        </div>
    );
};


export default Main;