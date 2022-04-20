import React from 'react';
import Dial from './dial';
import Calendly from './calendly';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Grid } from '@mui/material';

export default function App() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      className="App"
    >
      <Dial />
      <section>
        <h2>About Me</h2>
      </section>
      <section>
        <h2>My Projects</h2>
      </section>
      <section>
        <h2>Contact Me</h2>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item>
            <PhoneIcon />
            (631)830-3327
          </Grid>

          <Grid item>
            <EmailIcon />
            dennis.m.berezin@gmail.com
          </Grid>

          <Grid item>
            <LinkedInIcon />
            https://www.linkedin.com/in/dennis-berezin
          </Grid>

          <Grid item><CalendarMonthIcon /><Calendly /></Grid>
        </Grid>
      </section>
    </Grid>
  );
}