import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { PopupModal } from "react-calendly";

export default function calendly() {
  const [openC, setOpenC] = React.useState(false);
  return (
    <Box id='popArea'>
      <Button
        id='schedule'
        variant="contained"
        sx={{ backgroundColor: "gold", color: "#756201" }}
        onClick={() => {setOpenC(true)}}
      >
        <Typography id='schedText'>
          Schedule Time w/ Me
        </Typography>
      </Button>
      <PopupModal
        url="https://calendly.com/denberez/30min"
        rootElement={document.getElementById("popArea")}
        textColor="#ffffff"
        color="#00a2ff"
        onModalClose={() => setOpenC(false)}
        open={openC}
      />
    </Box>
  )
}


