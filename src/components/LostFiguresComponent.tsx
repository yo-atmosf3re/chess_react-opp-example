import React from 'react'
import { Figure } from '../models/figures/Figure';

interface LostFiguresPropsI {
   title: string;
   figures: Figure[]
}

export const LostFiguresComponent: React.FC<LostFiguresPropsI> = ({
   title, figures
}) => {
   return (
      <div
         className='lost'
      >
         <h3>
            {title}
         </h3>
         <div
            className='figures-lost'
         >
            {
               figures.map(f =>
                  <div
                     key={f.id}
                  >
                     {f.name} {f.logo && <img src={f.logo} width={20} height={20} />}
                  </div>
               )
            }
         </div>
      </div>
   )
}
