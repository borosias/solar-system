import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    CssBaseline,
    Button,
    useMediaQuery,
} from '@mui/material';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useState} from 'react';
import {TSection} from "../types/TSection.ts";
import ModelOpenPage from "./ModelOpenPage.tsx";
import HomePage from "./MainPage.tsx";
import PrivacyPolicy from "./Privacy Policy.tsx";
import CatalogPage from "./PageWithInfo.tsx";

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
    {title: 'Home', href: '/'},
    {title: 'Model', href: '/model'},
    {title: 'Catalog', href: '/catalog'},
];

function App() {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <ThemeProvider theme={theme}>
            <Router>
            <CssBaseline />
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            Solaris
                        </Typography>
                        {(!isMobile || isMenuOpen) && sections.map((section: TSection) => (
                            <Link key={section.title} to={section.href} style={{ textDecoration: 'none' , color:"inherit"}}>
                                <Button color="inherit">{section.title}</Button>
                            </Link>
                        ))}
                        {isMobile && (
                            <Button color="inherit" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                {isMenuOpen ? 'Close' : 'Menu'}
                            </Button>
                        )}
                    </Toolbar>
                </AppBar>
                <Routes>
                    <Route path="/catalog" element={<CatalogPage/>}/>
                    <Route path="/model" element={<ModelOpenPage/>}/>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/privacy_policy_solaris" element={<PrivacyPolicy />}/>
                </Routes>
                <Box component="footer" sx={{ mt: 4, p: 2, textAlign: 'center', backgroundColor: '#222222', color: '#fff' }}>
                    <Typography variant="body2" color="inherit">
                        &copy; 2024 Solaris Website
                    </Typography>
                    <Typography variant="body2" color="inherit">
                        <Link color="inherit" to={'/privacy_policy_solaris'}>Privacy Policy</Link>
                    </Typography>
                </Box>
            </Router>
        </ThemeProvider>
    );
}

export default App;