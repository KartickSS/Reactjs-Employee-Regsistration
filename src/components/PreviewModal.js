import React from "react";
import { Modal, Box,  Button, Grid, Typography } from "@mui/material";

const PreviewModal = ({ open, onClose, data }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ width: 400, bgcolor: "white", p: 3, m: "auto", mt: 10, borderRadius: 2 }}>
        <Typography variant="h6">Preview Details</Typography>
        <Typography>Name: {data.name}</Typography>
        <Typography>Last Name: {data.lastName}</Typography>
        <Typography>Gender: {data.gender}</Typography>
        <Typography>Primary Address: {data.primaryAddress}</Typography>
        <Typography>Secondary Address: {data.secondaryAddress}</Typography>
        <Typography>Phone Number: {data.phoneNumber}</Typography>
        <Typography>Qualification: {data.qualification}</Typography>
        <Typography>University: {data.university}</Typography>
        <Typography>Year of Passing: {data.yearOfPassing}</Typography>
        <Button variant="contained" color="secondary" fullWidth onClick={onClose} sx={{ mt: 2 }}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default PreviewModal;
