import { Button } from '@mui/material';
import { useEffect } from 'react';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import {FullScreenButtonProps} from "../types/TFullScreenButton.ts";



const FullScreenButton: React.FC<FullScreenButtonProps> = ({ onFullScreenToggle}) => {
    const toggleFullScreen = () => {
        const modelElement = document.querySelector('#model-container');
        if (modelElement) {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            } else {
                modelElement.requestFullscreen();
            }
            onFullScreenToggle();
        }
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                document.exitFullscreen();
                onFullScreenToggle();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onFullScreenToggle]);

    return (
        <Button onClick={toggleFullScreen} color="inherit" sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            {document.fullscreenElement ? <FullscreenExitOutlinedIcon/> : <FullscreenOutlinedIcon/>}
        </Button>
    );
};

export default FullScreenButton;