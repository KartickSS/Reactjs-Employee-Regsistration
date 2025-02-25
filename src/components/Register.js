import React from "react";
import { TextField, Button, Box, Container, Paper ,Grid , Tab, InputAdornment, IconButton } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from "react";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import UploadDocs from "./UploadDocs";
import PreviewModal from "./PreviewModal";

const Register = () => {

    const [primaryAddress,setPrimaryAddress] = useState("");
    const [secondaryAddress,setSecondaryAddress] = useState("");
    const [tabIndex, setTabIndex] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        gender: "",
        primaryAddress: "",
        secondaryAddress: "",
        phoneNumber: "",
        qualification: "",
        university: "",
        yearOfPassing: "",
      });

    const handleCopyAddress = () => {
        setSecondaryAddress(primaryAddress);
    }

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
      };

      const handlePreview = () => {
        setFormData({
          ...formData,
          primaryAddress,
          secondaryAddress,
        });
        setOpenModal(true);
      };


    return (
        <Container component="main" maxWidth="sm">
            <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
            <TabContext value={tabIndex}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList onChange={handleTabChange} aria-label="registration tabs" sx={{ display: "flex", justifyContent: "space-between" }} >
                    <Tab label="Personal Details" value="0" />
                    <Tab label="Educational Details" value="1" />
                    <Tab label="Upload Docs" value="2" />
                    </TabList>
                </Box>

                    <TabPanel value="0">
                        <form>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                            <TextField
                                fullWidth
                                label="Name"
                                name="name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                            </Grid>
                            <Grid item xs={4}>
                            <TextField
                                fullWidth
                                label="Last name"
                                name="Last name"
                                type="name"
                                value={formData.lastName}
                                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                
                            />
                            </Grid >
                            <Grid item xs={4}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                                >
                                    <MenuItem >Male</MenuItem>
                                    <MenuItem>Female</MenuItem>
                                </Select>
                                </FormControl>
                            </Grid>
                        </Grid>


                                <TextField
                                    fullWidth
                                    label="Primary Address"
                                    name="PrimaryAddress"
                                    type="text"
                                    value={primaryAddress}
                                    onChange={(e)=>setPrimaryAddress(e.target.value)}
                                    margin="normal"
                                />

                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Address"
                                            name="Address"
                                            type="Address"
                                            value={secondaryAddress}
                                            onChange={(e) => setSecondaryAddress(e.target.value)}
                                            margin="normal"
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <Button 
                                                            variant="contained" 
                                                            size="small"
                                                            onClick={handleCopyAddress} 
                                                            sx={{ fontSize: "10px", padding: "4px 8px", minWidth: "auto" }}
                                                        >
                                                            Same as Primary
                                                        </Button>
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </Grid>
                                </Grid>

                        <TextField
                            fullWidth
                            label="Phone Number"
                            name="phone number"
                            margin="normal"
                            value={formData.phoneNumber}
                            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        />

                        <Box mt={2}>
                            <Button type="submit" variant="contained" color="primary" fullWidth onClick={()=>{setTabIndex("1")}}>
                            Submit
                            </Button>
                        </Box>
                    </form>
                    </TabPanel>

            <TabPanel value="1">
                <form>
                    <TextField fullWidth label="Highest Qualification" 
                     name="qualification" 
                     margin="normal" 
                     value={formData.qualification}
                        onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}/>

                    <TextField fullWidth label="University/College"  
                    name="university" 
                    margin="normal" 
                    value={formData.university}
                    onChange={(e) => setFormData({ ...formData, university: e.target.value })}/>

                    <TextField fullWidth label="Year of Passing"  
                    name="yearOfPassing" 
                    type="number" 
                    margin="normal" 
                    value={formData.yearOfPassing}
                    onChange={(e) => setFormData({ ...formData, yearOfPassing: e.target.value })}/>
                    <Box mt={2}>
                        <Button variant="contained" color="primary" fullWidth onClick={()=>{setTabIndex("2")}}>
                        Submit
                        </Button>
                    </Box>
                </form>

                            <Box mt={2}>
                                <Button variant="contained" color="primary" fullWidth onClick={handlePreview}>
                                    Preview
                                </Button>
                            </Box>
            </TabPanel>

            <TabPanel value="2">
                        <UploadDocs onPreview={handlePreview} /> 
            </TabPanel>

        </TabContext>
      </Paper>
      <PreviewModal open={openModal} onClose={() => setOpenModal(false)} data={formData} />
    </Container>
    )
}

export default Register;