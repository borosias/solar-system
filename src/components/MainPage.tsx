import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { styled } from '@mui/system';

const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
}));

const HomePage: React.FC = () => {
    return (
        <StyledBox>
            <Container maxWidth="md">
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12}>
                        <Typography variant="h3" align="center" gutterBottom>
                            Welcome to Our Amazing Project
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h5" align="center" paragraph>
                            Dive into the world of innovation and creativity with our cutting-edge solutions. We are here to revolutionize the way you think about technology.
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1" align="center" paragraph>
                            Our team of experts is dedicated to bringing you the best in class services. Whether it's a small tweak or a complete overhaul, we've got you covered.
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1" align="center" paragraph>
                            With years of experience under our belts, we pride ourselves on delivering top-notch results. Our secret? A blend of passion, expertise, and a sprinkle of magic.
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" size="large" href="#contact">
                            Get Started
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </StyledBox>
    );
};

export default HomePage;