import React from 'react';
import './App.css';
import { BoardComponent } from './components/BoardComponent';
import { Board } from './models/Board';
import { Player } from './models/Player';
import { Colors } from './models/Colors';
import { LostFiguresComponent } from './components/LostFiguresComponent';
import { TimerComponent } from './components/TimerComponent';
import { HeaderComponent } from './components/HeaderComponent';

function App() {

  const [board, setBoard] = React.useState<Board>(new Board())

  const [whitePlayer, setWhitePlayer] = React.useState<Player>(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = React.useState<Player>(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = React.useState<Player | null>(null);

  React.useEffect(() => {
    restart();
    setCurrentPlayer(whitePlayer);
  }, [])

  const restart = (): void => {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  }

  const swapPlayer = () => {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer);
  }

  return (
    <>
      <HeaderComponent
        restart={restart}
        currentPlayer={currentPlayer}
      />
      <div className='app'>
        <BoardComponent
          board={board}
          setBoard={setBoard}
          currentPlayer={currentPlayer}
          swapPlayer={swapPlayer}
        />
        <div
          className='game-info'
        >
          <LostFiguresComponent
            figures={board.lostBlackFigures}
            title='Чёрные фигуры'
          />
          <LostFiguresComponent
            figures={board.lostWhiteFigures}
            title='Белые фигуры'
          />
        </div>
      </div>
    </>
  );
}


export default App;