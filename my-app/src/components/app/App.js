import React, { useState } from 'react';
import Header from '../header/Header'
import Sections from '../sections/Sections'
import Player from '../player/Player'
import Main from '../main-page/Main'
import Win from '../win/Win'
import mathRandom from '../../data/formula'
import './App.scss';
import { useSelector } from 'react-redux';

const App = () => {
  useSelector(state => state.game.level);
  const [currentBird, setCurrentBird] = useState(mathRandom)
  let win = useSelector(state => state.game.win);
  const setWinModal = () => {
    if (win === true) {
      return (<Win />);
    }
    return (
      <div className='app_container'>
        <Player
          currentBird={currentBird}
          setCurrentBird={setCurrentBird}
        />
        <Main
          currentBird={currentBird}
          setCurrentBird={setCurrentBird}
        />
      </div>
    )
  }
  return (
    <div className="App">
      <Header />
      <Sections />
      {setWinModal()}
    </div>
  );
}

export default App
