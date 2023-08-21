import React from 'react'
import { Player } from '../models/Player';
import Button from '@mui/material/Button/Button';
import { Colors } from '../models/Colors';

interface TimerPropsI {
   currentPlayer: Player | null;
   restart: () => void;
}

export const TimerComponent: React.FC<TimerPropsI> = ({
   currentPlayer, restart
}) => {
   const [blackTime, setBlackTime] = React.useState<number>(300);
   const [whiteTime, setWhiteTime] = React.useState<number>(300);

   const timer = React.useRef<null | ReturnType<typeof setInterval>>(null);

   React.useEffect(() => {
      startTimer()
   }, [currentPlayer])

   const startTimer = () => {
      if (timer.current) clearInterval(timer.current)

      const callback = currentPlayer?.color === Colors.WHITE ? decrementWhitetimer : decrementBlackTimer;
      timer.current = setInterval(callback, 1000)
   }

   const decrementBlackTimer = () => {
      setBlackTime(prev => prev - 1);
   }

   const decrementWhitetimer = () => {
      setWhiteTime(prev => prev - 1);
   }

   const handleRestart = () => {
      setWhiteTime(300);
      setBlackTime(300);
      restart();
   }


   return (
      <div
         className='timer'
      >
         <span className='timer-players'>
            Чёрные - {blackTime}
         </span>
         <span className='timer-players'>
            Белые - {whiteTime}
         </span >
         <Button
            color='warning'
            onClick={handleRestart}
            variant="contained"
         >
            Перезапуск игры
         </Button>
      </div>
   )
}