import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { styled } from '@mui/system';

const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
}));

const Section = styled(Box)(({ theme }) => ({
    padding: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(8),
    },
}));

const Feature = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    marginBottom: theme.spacing(4),
}));

const HomePage: React.FC = () => {
    return (
        <StyledBox>
            <Container maxWidth="md">
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Section>
                            <Typography variant="h2" align="center" gutterBottom>
                                Welcome to Solaris: Explore the Solar System in 3D
                            </Typography>
                            <Typography variant="h5" align="center" paragraph>
                                Immerse yourself in the wonders of our solar system with our cutting-edge 3D modeling solutions. Experience the planets like never before.
                            </Typography>
                            <Button variant="contained" color="primary" size="large" href="#contact">
                                Get Started
                            </Button>
                        </Section>
                    </Grid>
                    <Grid item xs={12}>
                        <Section>
                            <Feature>
                                <Typography variant="h4" gutterBottom>
                                    Our Expertise in 3D Modeling
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    Our team of experts is dedicated to creating realistic and interactive 3D models of celestial bodies. From accurate planet textures to dynamic orbital simulations, we deliver unparalleled quality.
                                </Typography>
                            </Feature>
                            <Feature>
                                <Typography variant="h4" gutterBottom>
                                    Discover the Solar System
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    Embark on a journey through space with our detailed planet explorations. Learn about each planet's unique features and mysteries through our engaging interactive experiences.
                                </Typography>
                            </Feature>
                        </Section>
                    </Grid>
                    <Grid item xs={12}>
                        <Section>
                            <Typography variant="h4" align="center" gutterBottom>
                                Our Services
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="body1" paragraph>
                                        Solar System Visualization: Explore the planets and their moons in stunning detail.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="body1" paragraph>
                                        Interactive 3D Models: Engage with realistic 3D representations of celestial bodies.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="body1" paragraph>
                                        Orbital Simulations: Experience the dynamics of planetary orbits and celestial mechanics.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="body1" paragraph>
                                        Educational Tools: Learn about astronomy and space exploration through interactive tools.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Section>
                    </Grid>
                </Grid>
            </Container>
        </StyledBox>
    );
};

export default HomePage;
