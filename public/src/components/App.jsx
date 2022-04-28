import React from 'react';
import Contact from './contact';
import { Grid, Typography } from '@mui/material';

export default function App() {
  const myRef = React.useRef(null);
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
      </section>
      <section id='projSec' ref={myRef}>
        <Typography variant="h5">My Projects</Typography>
      </section>
    </Grid>
  );
}