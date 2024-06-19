import SolarSystem from "./Model.tsx";
import FullScreenButton from "./FullScreenButton.tsx";
import {Container, styled} from "@mui/material";

const ModelOpenPage = () => {

    const ModelBox = styled('div')({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '75vh',
        backgroundColor: '#000000',
        color: '#fff'
    });
    const handleFullScreenToggle = () => {
        console.log('Toggle full screen');
    };

    return (
        <Container sx={{
            mt: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end"
        }}>
            <ModelBox id="model-container" sx={{width: '100%'}}>
                <SolarSystem/>
            </ModelBox>
            <FullScreenButton onFullScreenToggle={handleFullScreenToggle}/>
        </Container>);
}
export default ModelOpenPage;