import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { PopupModal } from "react-calendly";

export default function calendly() {
  const [open, setOpen] = React.useState(false);
  const [openC, setOpenC] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  return (
    <div id='popArea'>
      <Button id='dial' variant="contained" onClick={() => {setOpenC(true)}}>Schedule Time w/ Me</Button>
      <PopupModal
      url="https://calendly.com/denberez/30min"
      rootElement={document.getElementById("popArea")}
      textColor="#ffffff"
      color="#00a2ff"
      onModalClose={() => setOpenC(false)}
      open={openC}
      />
    </div>
  )
}

