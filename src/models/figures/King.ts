import { Figure, FigureNames } from "./Figure";
import blackLogo from '../../assets/black-king.png';
import whiteLogo from '../../assets/white-king.png';
import { Cell } from "../Cell";
import { Colors } from "../Colors";

export class King extends Figure {

   constructor(color: Colors, cell: Cell) {
      super(color, cell);
      this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
      this.name = FigureNames.KING;
   }

   public canMove(target: Cell): boolean {
      if (!super.canMove(target)) {
         return false;
      }

      const dX = Math.abs(target.x - this.cell.x);
      const dY = Math.abs(target.y - this.cell.y);

      if ((dX === 1 && dY === 0) ||
         (dX === 0 && dY === 1) ||
         (dX === 1 && dY === 1)) {
         return true;
      }

      return false;


   }

}