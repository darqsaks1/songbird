import React, { useState } from 'react';
import Header from '../header/Header'
import Sections from '../sections/Sections'
import Player from '../player/Player'
import Main from '../main-page/Main'
import './App.scss';

const mathRandom = Math.floor(Math.random() * Math.floor(6))

const App = () => {
  const [currentBird, setCurrentBird] = useState(mathRandom)
  return (
    <div className="App">
      <Header />
      <Sections />
      <Player
        currentBird={currentBird}
        setCurrentBird={setCurrentBird}
      />
      <Main
        currentBird={currentBird}
       
         />
    </div>
  );
}


// const mapStateToProps = ({ game: { gameMode, level } }) => ({
//   gameMode, level,
// });

// const mapDispatchToProps = {
//   setGameMode,
//   setLevel,

// };
export default App 
// connect(mapStateToProps, mapDispatchToProps)(
//   );

