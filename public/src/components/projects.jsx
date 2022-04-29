import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'light'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function projects() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const linker = (e) => {
    if (e.currentTarget.id === 'gitKA') {
      window.open("https://github.com/DenBerez/Kane-Academy");
    }
    if (e.currentTarget.id === 'gitCG') {
      window.open("https://github.com/DenBerez/Catwalk-Gandalf");
    }
    if (e.currentTarget.id === 'gitAA') {
      window.open("https://github.com/DenBerez/Atelier-Azathoth");
    }
    if (e.currentTarget.id === 'gitE2') {
      window.open("https://github.com/DenBerez/Excuses");
    }
  }

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
    >
      <Grid item alignSelf="center"><Typography variant="h5" sx={{ marginBottom: "20px" }}>My Projects</Typography></Grid>
      <Accordion sx={{ backgroundColor: "#484848", color: "whitesmoke", textShadow: "1px 1px black" }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Kane Academy</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Tech Used:
          </Typography>
          <br />
          <Typography>
            <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="Javascript" />
            <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" /><br />
            <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
            <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" /><br />
            <img src="https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white" alt="MUI" />
            <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="NodeJS" /><br />
            <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express.js" />
            <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="Postgres" /><br />
            <img src="https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black" alt="Webpack" />
            <img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="AWS" /><br />
          </Typography>
          <br />
          <Typography>
            Repo Link:
          </Typography>
          <IconButton
            id='gitCG'
            variant="contained"
            sx={{borderRadius: "100%", backgroundColor: "gold", margin: "10px"}}
            onClick={linker}
          >
            <GitHubIcon/>
          </IconButton>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "#484848", color: "whitesmoke", textShadow: "1px 1px black" }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Catwalk Gandalf</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
            Tech Used:
          </Typography>
          <br />
          <Typography>
            <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="Javascript" />
            <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" /><br />
            <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
            <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" /><br />
            <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="NodeJS" />
            <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express.js" /><br />
            <img src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
            <img src="https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black" alt="Webpack" /><br />
            <img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="AWS" />
          </Typography>
          <br />
          <Typography>
            Repo Link:
          </Typography>
          <IconButton
            id='gitCG'
            variant="contained"
            sx={{borderRadius: "100%", backgroundColor: "gold", margin: "10px"}}
            onClick={linker}
          >
            <GitHubIcon />
          </IconButton>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "#484848", color: "whitesmoke", textShadow: "1px 1px black" }} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Atelier Azathoth</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
            Tech Used:
          </Typography>
          <Typography>
            --
          </Typography>
          <Typography>
            Repo Link:
          </Typography>
          <IconButton
            id='gitAA'
            variant="contained"
            sx={{borderRadius: "100%", backgroundColor: "gold", margin: "10px"}}
            onClick={linker}
          >
            <GitHubIcon />
          </IconButton>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "#484848", color: "whitesmoke", textShadow: "1px 1px black" }} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Excuses²</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
            Tech Used:
          </Typography>
          <Typography>
            --
          </Typography>
          <Typography>
            Repo Link:
          </Typography>
          <IconButton
            id='gitE2'
            variant="contained"
            sx={{borderRadius: "100%", backgroundColor: "gold", margin: "10px"}}
            onClick={linker}
          >
            <GitHubIcon />
          </IconButton>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
}