import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx"; 
import { Box, Button, TextField, Typography, Container } from '@mui/material';
import Footer from "../components/Footer.jsx"; 

import "../styles/contact.css";

export const Contact = () => {
	return (
        <div>
            <Navbar />
            <div className="container">
                <Container component="main" maxWidth="sm">
                <Box className="contact-form-container">
                    <Typography component="h1" variant="h5">
                    Contact Me
                    </Typography>
                    <Box component="form" className="contact-form">
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="message"
                        label="Message"
                        type="text"
                        id="message"
                        multiline
                        rows={4}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className="contact-form-button"
                    >
                        Submit
                    </Button>
                    </Box>
                </Box>
                </Container>
            </div>
            <Footer />
        </div>
	);
};