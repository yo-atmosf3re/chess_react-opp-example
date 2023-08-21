import React, { useEffect } from 'react'
import { Board } from '../models/Board';
import { CellComponent } from './CellComponent';
import { Cell } from '../models/Cell';
import { Player } from '../models/Player';
import '../App.css';
import { Colors } from '../models/Colors';

interface BoardPropsI {
   board: Board;
   setBoard: (board: Board) => void;
   currentPlayer: Player | null;
   swapPlayer: () => void;
}

export const BoardComponent: React.FC<BoardPropsI> = ({
   board, setBoard, currentPlayer, swapPlayer
}) => {

   const [selectedCell, setSelectedCell] = React.useState<Cell | null>(null);

   const clickOnCell = (cell: Cell) => {
      if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
         selectedCell.moveFigure(cell);
         swapPlayer();
         setSelectedCell(null);
      } else {
         if (cell.figure?.color === currentPlayer?.color) {
            setSelectedCell(cell)
         }
      }
   }

   useEffect(() => {
      highlightCells()
   }, [selectedCell])

   const highlightCells = () => {
      board.highlightCells(selectedCell);
      updateBoard();
   }

   const updateBoard = () => {
      const newBoard = board.getCopyBoard();
      setBoard(newBoard);
   }

   return (
      <div>
         <div
            className='board'
         >
            {
               board.cells.map((row, index) =>
                  <React.Fragment key={index}>
                     {
                        row.map(cell =>
                           <CellComponent
                              clickOnCell={clickOnCell}
                              cell={cell}
                              key={cell.id}
                              selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                           />
                        )
                     }
                  </React.Fragment>
               )
            }
         </div>
      </div>
   )
}

   // const currentTitlePlayer = currentPlayer?.color === Colors.WHITE ? 'белый' : 'чёрный';

   //    return (
   //       {/* <div
   //             className='player-title'
   //          >
   //             Текущий игрок - {currentTitlePlayer}
   //          </div> */}