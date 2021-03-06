import React from 'react';
import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import face from '../../dist/face.jpg';
import Calendly from './calendly';
import About from './about';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import DBRes from '../../dist/DBRes.pdf';
import { saveAs } from "file-saver";

export default function contact({ refProp }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElID, setAnchorElID] = React.useState(null);
  const executeScroll = () => refProp.current.scrollIntoView();
  const handleClick = (event) => {
    setAnchorElID(event.currentTarget.id);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorElID(null);
    setAnchorEl(null);
  };
  const linker = (e) => {
    if (e.currentTarget.id === 'linked') {
      window.open("https://www.linkedin.com/in/dennis-berezin");
    }
    if (e.currentTarget.id === 'git') {
      window.open("https://github.com/DenBerez");
    }
  }
  const saveFile = () => {
    saveAs(
      DBRes,
      "Dennis_Berezin_Resume.pdf"
    );
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className="App"
    >
      <Typography id="myName" variant="h4" sx={{ p: 5 }}>
        Dennis Berezin
      </Typography>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        onClose={handleClose}
      >
        {anchorElID
        &&
          <Typography sx={{ p: 1 }}>
            {anchorElID === 'phone'
            && "(631)830-3327"}
            {anchorElID === 'email'
            && "dennis.m.berezin@gmail.com"}
          </Typography>
        }
      </Popover>

      {/* Face Row */}

      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Tooltip title="View my Phone #">
          <IconButton
            id='phone'
            variant="contained"
            aria-describedby={id}
            onClick={handleClick}
            sx={{borderRadius: "100%", backgroundColor: "gold", margin: "10px"}}
            >
              <PhoneIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="View my Email">
          <IconButton
            id='email'
            variant="contained"
            aria-describedby={id}
            onClick={handleClick}
            sx={{borderRadius: "100%", backgroundColor: "gold", margin: "10px"}}
          >
            <EmailIcon />
          </IconButton>
        </Tooltip>

        <Avatar alt="Dennis Berezin Headshot" src={face} sx={{width: "200px", height: "200px", margin: "10px"}} />

        <Tooltip title="Visit my LinkedIn">
          <IconButton
            id='linked'
            variant="contained"
            sx={{borderRadius: "100%", backgroundColor: "gold", margin: "10px"}}
            onClick={linker}
          >
            <LinkedInIcon />
          </IconButton>
          </Tooltip>
        <Tooltip title="Visit my Github">
          <IconButton
            id='git'
            variant="contained"
            sx={{borderRadius: "100%", backgroundColor: "gold", margin: "10px"}}
            onClick={linker}
          >
            <GitHubIcon />
          </IconButton>
        </Tooltip>
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Calendly />
        <Button
        id='resLink'
        variant="contained"
        sx={{ backgroundColor: "gold", color: "#756201" }}
        onClick={saveFile}
        >
        <Typography id='schedText'>
          Download my Resume
        </Typography>
      </Button>
      </Grid>
      <Button
        id='schedule'
        variant="contained"
        sx={{ backgroundColor: "gold", color: "#756201" }}
        onClick={() => {executeScroll()}}
      >
        <Typography id='schedText'>
          See my Work
        </Typography>
      </Button>



      <Paper variant="elevation" elevation={3} sx={{ backgroundColor: "#484848", color: "whitesmoke", marginTop: "20px" }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ marginLeft: "-20px" }}
        >
          <Typography variant="h6" sx={{ marginTop: "20px", textShadow: "1px 2px black" }}>About Me</Typography>
          <About />
        </Grid>
      </Paper>


    </Grid>
  )
}
