import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx"; 
import { Box, Button, ListItemText, Typography, Container, List, ListItem } from '@mui/material';

import "../styles/projects.css";
import Footer from "../components/Footer.jsx"; 


export const Projects = () => {
	return (
		<div>
            <Navbar />

            <Container className="projects-container">
            <Box className="project-item">
                <Typography variant="h6" className="project-title">
                Personal Project, Course Registration Hub
                </Typography>
                <List className="project-details">
                <ListItem>
                    <ListItemText primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                </ListItem>
                </List>
            </Box>
            <Box className="project-item">
                <Typography variant="h6" className="project-title">
                Personal Project, Photo Hunt UVA
                </Typography>
                <List className="project-details">
                <ListItem>
                    <ListItemText primary="Dignissim sodales ut eu sem. Nunc sed velit dignissim sodales ut eu sem integer vitae. Nunc id cursus metus aliquam. In mollis nunc sed id semper risus in hendrerit gravida. Congue quisque egestas diam in arcu. Augue eget arcu dictum varius duis. Eget magna fermentum iaculis eu. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Donec adipiscing tristique risus nec feugiat in fermentum." />
                </ListItem>
                </List>
            </Box>
            <Box className="project-item">
                <Typography variant="h6" className="project-title">
                Personal Project, Page Table Implementation
                </Typography>
                <List className="project-details">
                <ListItem>
                    <ListItemText primary="Sed turpis tincidunt id aliquet. Viverra accumsan in nisl nisi scelerisque eu. Aliquam purus sit amet luctus venenatis lectus magna fringilla. Non diam phasellus vestibulum lorem sed risus ultricies. Nulla facilisi etiam dignissim diam quis enim. Eu feugiat pretium nibh ipsum consequat nisl. Sagittis aliquam malesuada bibendum arcu vitae. Maecenas sed enim ut sem viverra aliquet eget sit amet. Magna sit amet purus gravida quis blandit. Sed faucibus turpis in eu mi bibendum. Magna fringilla urna porttitor rhoncus dolor. Varius sit amet mattis vulputate. Velit dignissim sodales ut eu sem integer vitae justo." />
                </ListItem>
                </List>
            </Box>
        </Container>
        <Footer />
		</div>
	);
};