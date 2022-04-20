import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
// import SaveIcon from '@mui/icons-material/Save';
// import PrintIcon from '@mui/icons-material/Print';
// import ShareIcon from '@mui/icons-material/Share';
import MoodIcon from '@mui/icons-material/Mood';
import GitHubIcon from '@mui/icons-material/GitHub';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import Avatar from '@mui/material/Avatar';
import face from '../../dist/face.jpg';

const actions = [
  { icon: <MoodIcon />, name: 'About Me' },
  { icon: <GitHubIcon />, name: 'My Projects' },
  { icon: <ConnectWithoutContactIcon />, name: 'Contact Me' },
  // { icon: <ShareIcon />, name: 'Share' },
];

export default function ControlledOpenSpeedDial() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ height: 370, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial controlled open example"
        direction='down'
        sx={{ position: 'absolute', top: '150px', marginLeft: '-25px' }}
        icon={<Avatar alt="Dennis Berezin Headshot" src={face} sx={{ width: 200, height: 200, top: -50, margin: 50 }} />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        FabProps={{
          sx: {
            bgcolor: 'secondary.main',
            '&:hover': {
              bgcolor: 'secondary.main',
            }
          }
        }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}