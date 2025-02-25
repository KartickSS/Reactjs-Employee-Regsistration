import React from "react";
import { Box, Button, TextField ,Grid,Typography} from "@mui/material";


const UploadDocs = ( {onPreview} ) => {
    return (
      <Box>
        <Grid container spacing={2} alignItems="center">
          
          <Grid item xs={6}>
            <Typography variant="h6">Resume</Typography>
            <TextField fullWidth type="file" margin="normal" />
          </Grid>
  
          <Grid item xs={6}>
            <Typography variant="h6">ID Proof</Typography>
            <TextField fullWidth type="file" margin="normal" />
          </Grid>
        </Grid>
  
        <Box mt={2}>
          <Button variant="contained" color="primary" fullWidth>
            Upload
          </Button>
        </Box>

        <Box mt={2}>
            <Button variant="contained" color="primary" fullWidth onClick={onPreview}>
                Preview
            </Button>
        </Box>
      </Box>

    );
  };
  
  export default UploadDocs;