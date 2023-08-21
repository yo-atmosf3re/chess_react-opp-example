import { Board } from "./Board";
import { Colors } from "./Colors";
import { Figure } from "./figures/Figure";

export class Cell {
   readonly x: number;
   readonly y: number;
   readonly color: Colors;
   figure: Figure | null;
   board: Board;
   available: boolean; // Может ли переместиться фигура;
   id: number;

   public constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
      this.x = x;
      this.y = y;
      this.color = color;
      this.figure = figure;
      this.board = board;
      this.available = false;
      this.id = Math.random();
   }

   public isEmpty(): boolean {
      return this.figure === null;
   }

   public isEnemy(target: Cell): boolean {
      if (target.figure) {
         return this.figure?.color !== target.figure.color;
      }
      return false;
   }

   public isEmptyVertical(target: Cell): boolean {
      if (this.x !== target.x) {
         return false;
      }
      const min = Math.min(this.y, target.y);
      const max = Math.max(this.y, target.y);

      for (let y = min + 1; y < max; y++) {
         if (!this.board.getCell(this.x, y).isEmpty()) {
            return false;
         }
      }
      return true
   }

   public isEmptyHorisontal(target: Cell): boolean {
      if (this.y !== target.y) {
         return false;
      }
      const min = Math.min(this.x, target.x);
      const max = Math.max(this.x, target.x);

      for (let x = min + 1; x < max; x++) {
         if (!this.board.getCell(x, this.y).isEmpty()) {
            return false;
         }
      }
      return true
   }

   public isEmptyDiagonal(target: Cell): boolean {
      const absX = Math.abs(target.x - this.x);
      const absY = Math.abs(target.y - this.y);

      if (absX !== absY)
         return false;

      const dY = this.y < target.y ? 1 : -1;
      const dX = this.y < target.x ? 1 : -1;

      for (let i = 1; i < absY; i++) {
         if (!this.board.getCell(this.x + dX * i, this.y + dY * i).isEmpty()) {
            return false;
         }
      }
      return true;
   }

   public setFigure(figure: Figure): void {
      this.figure = figure;
      this.figure.cell = this;
   }

   public addLostFigure(figure: Figure) {
      figure.color === Colors.BLACK
         ? this.board.lostBlackFigures.push(figure)
         : this.board.lostWhiteFigures.push(figure);
   }

   public moveFigure(target: Cell): void {
      if (this.figure && this.figure?.canMove(target)) {
         this.figure.moveFigure(target);
         if (target.figure) {
            this.addLostFigure(target.figure);
         }
         target.setFigure(this.figure);
         this.figure = null;
      }
   }

}