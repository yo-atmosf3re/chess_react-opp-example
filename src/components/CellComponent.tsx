import React from 'react'
import { Cell } from '../models/Cell'

interface CellPropsI {
   cell: Cell
   selected: boolean
   clickOnCell: (cell: Cell) => void
}

export const CellComponent: React.FC<CellPropsI> = ({
   cell, selected, clickOnCell
}) => {

   const cellClass = ['cell', cell.color, selected ? 'selected' : ''].join(' ');

   const onClickHandler = () => clickOnCell(cell)

   return (
      <div
         className={cellClass}
         onClick={onClickHandler}
         style={{ background: cell.available && cell.figure ? 'crimson' : '' }}
      >
         {
            cell.available &&
               !cell.figure
               ? <div
                  className={'available'}
               />
               : null
         }
         {
            cell.figure?.logo && <img src={cell.figure.logo} alt='' />
         }
      </div>
   )
}