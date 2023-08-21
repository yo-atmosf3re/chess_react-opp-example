import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { TimerComponent } from './TimerComponent';
import { Player } from '../models/Player';

interface HeaderPropsI {
   currentPlayer: Player | null;
   restart: () => void;
}

export const HeaderComponent: React.FC<HeaderPropsI> = ({
   currentPlayer, restart
}) => {
   return (
      <Box sx={{ display: 'flex' }}>
         <CssBaseline />
         <AppBar component="nav">
            <Toolbar>
               <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
               >
                  SIMPLE CHESS GAME
               </Typography>
               <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                  <TimerComponent
                     currentPlayer={currentPlayer}
                     restart={restart}
                  />
               </Box>
            </Toolbar>
         </AppBar>
      </Box>
   );
}
