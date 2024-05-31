import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Container,
    Link,
    CssBaseline,
    Button,
    useMediaQuery,
    styled
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import {TSection} from "../types/TSection.ts";
import SolarSystem from "./Model.tsx";

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        background: {
            default: '#303030',
        },
    },
    typography: {
        h6: {
            fontWeight: 600,
        },
        h4: {
            fontWeight: 600,
        },
        h5: {
            fontWeight: 500,
        },
    },
});

const sections: TSection[] = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Contact', href: '#contact' },
];

const ModelBox = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '75vh',
    backgroundColor: '#000000',
    color: '#fff' });

function App() {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Solaris
                    </Typography>
                    {(!isMobile || isMenuOpen) && sections.map((section:TSection) => (
                        <Button key={section.title} color="inherit" href={section.href}>
                            {section.title}
                        </Button>
                    ))}
                    {!isMobile && <Button color="inherit">Login</Button>}
                    {isMobile && (
                        <Button color="inherit" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? 'Close' : 'Menu'}
                        </Button>
                    )}
                </Toolbar>
            </AppBar>
            <Container sx={{ mt: 4 }}>
                <ModelBox>
                    <SolarSystem/>
                </ModelBox>
            </Container>
            <Box component="footer" sx={{ mt: 4, p: 2, textAlign: 'center', backgroundColor: '#222222', color: '#fff' }}>
                <Typography variant="body2" color="inherit">
                    &copy; 2024 My Stylish Website
                </Typography>
                <Typography variant="body2" color="inherit">
                    <Link href="#" color="inherit" underline="always">Privacy Policy</Link>
                </Typography>
            </Box>
        </ThemeProvider>
    );
}

export default App;