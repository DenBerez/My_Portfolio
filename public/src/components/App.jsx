import React from 'react';
import Contact from './contact';
import { Grid, Typography, Fab } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Techs from './techs';

export default function App() {
  const myRef = React.useRef(null);
  const scrollToTop = () =>{
    window.scrollTo({ top: 0 });
  };
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className="App"
    >
      <section id='topSec'>
        <Contact refProp={myRef} />
        {/* <Techs /> */}
      </section>
      <section id='projSec' ref={myRef}>
        <Typography variant="h5">My Projects</Typography>
      </section>
      <Fab id='fab' aria-label="up" onClick={scrollToTop}>
        <ArrowUpwardIcon fontSize="large" />
      </Fab>
    </Grid>
  );
}