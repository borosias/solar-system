import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';
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

const PlanetCard = styled(Card)(() => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
}));

const sxBoxProps = {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999 }

const CatalogPage: React.FC = () => {
    const [planets, setPlanets] = useState<string[]>([]);
    const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);

    useEffect(() => {
        const fetchedPlanets = [
            'Mercury',
            'Venus',
            'Earth',
            'Mars',
            'Jupiter',
            'Saturn',
            'Uranus',
            'Neptune',
        ];
        setPlanets(fetchedPlanets);
    }, []);

    const handlePlanetSelect = (planet: string) => {
        setSelectedPlanet(planet);
    };

    const handleCloseInfoBox = () => {
        setSelectedPlanet(null);
    };

    return (
        <StyledBox>
            <Container maxWidth="md">
                <Section>
                    <Typography variant="h2" align="center" gutterBottom>
                        Choose a Planet
                    </Typography>
                    <Grid container spacing={4}>
                        {planets.map((planet, index) => (
                            <Grid key={index} item xs={12} sm={6} md={4}>
                                <PlanetCard>
                                    <CardContent>
                                        <Typography variant="h5" align="center" gutterBottom>
                                            {planet}
                                        </Typography>
                                        <Typography variant="body1" align="center">
                                            Description of {planet}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </Typography>
                                    </CardContent>
                                    <Box sx={{ textAlign: 'center', marginBottom: '16px' }}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={() => handlePlanetSelect(planet)}
                                        >
                                            Select {planet}
                                        </Button>
                                    </Box>
                                </PlanetCard>
                            </Grid>
                        ))}
                    </Grid>
                </Section>
            </Container>

            {selectedPlanet && (
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                <Box sx={sxBoxProps}>
                    <Container maxWidth="md">
                        <Section>
                            <Typography variant="h3" align="center" gutterBottom>
                                {selectedPlanet}
                            </Typography>
                            <Typography variant="body1" align="center" paragraph>
                                Detailed information about {selectedPlanet}. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                            </Typography>
                            <Button variant="contained" color="secondary" onClick={handleCloseInfoBox}>
                                Close
                            </Button>
                        </Section>
                    </Container>
                </Box>
            )}
        </StyledBox>
    );
};

export default CatalogPage;
