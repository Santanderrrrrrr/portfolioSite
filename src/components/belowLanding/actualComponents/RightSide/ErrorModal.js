import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  borderRadius: "25px",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function ErrorModal({ open, setOpen, warnMessage, warnTitle }) {
  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{
              p: 1,
              backgroundColor: `${
                warnTitle.toString().startsWith("Perfect")
                  ? "rgba(102, 255, 102, 0.3)"
                  : "rgba(255,137,137,0.3)"
              }`,
              borderRadius: "10px",
              color: "rgb(80, 80, 80)",
            }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            {warnTitle ? warnTitle : "Houston, we have... an error!? 😲"}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {warnMessage}
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
