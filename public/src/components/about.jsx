import React from 'react';
import { Grid, Paper, Box, Typography } from '@mui/material';

export default function about() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ margin: "20px", padding: "20px" }}
    >
      <Box sx={{ maxWidth: "55ch", textAlign: "center" }}>
        <Typography>
          I graduated with a B.S. in Psychology and Minor in Chemistry from Stony Brook University back in 2019.<br /><br />
          I spent the next few years working in healthcare as a Phlebotomist to build up experience, and freelancing as a creative writer and game designer on Fiverr in my free time.<br /><br />
          However, the path that I was on proved to be far too long and uncertain, and I decided to make the switch to something that I've always been passionate about, but never pursued - software engineering!
        </Typography>
      </Box>
      <Box sx={{ maxWidth: "55ch", textAlign: "center" }}>
        <Typography>
          With the support of my family and friends, who've been trying to convince me to head in this direction my whole life, I enrolled in a rigorous Software Engineering Immersive Bootcamp at Hack Reactor.<br /><br />
          After three months of coding for 11 hours a day and 6 days a week, I not only learned how to build functional, clean and user-friendly full-stack web apps, but also how to be an invaluable asset to any engineering team.
        </Typography>
      </Box>
      <Box sx={{ maxWidth: "55ch", textAlign: "center" }}>
        <Typography>
          Although I'm versed in the full-stack, I'm especially passionate about front-end development, where I can see a project evolve second by second.<br /><br />
          I hope to bring this passion into the workplace, wherever that may end up being!<br /><br />
          You can find some descriptions of my past work below.
        </Typography>
      </Box>
    </Grid>
  )
}
