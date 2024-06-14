import React from 'react';
import { Paper, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {PlanetInfoBoxProps} from "../types/TPlanetInfoDialog.ts";

const PlanetInfoBox: React.FC<PlanetInfoBoxProps> = ({ planetInfo, onClose }) => {
    return (
        <Paper
            style={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                padding: '1.5vw',
                paddingRight: '6vw',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                color: 'white',
                borderRadius: '5px',
                width: 'fit-content'
            }}
        >
            <IconButton
                style={{
                    position: 'absolute',
                    top: '0.3vw',
                    right: '0.3vw',
                    color: 'white'
                }}
                onClick={onClose}
            >
                <CloseIcon />
            </IconButton>
            <Typography variant="h6">Information</Typography>
            <Typography style={{marginTop:'1vw'}}>Name: {planetInfo.englishName}</Typography>
            <Typography>Diameter: {`${planetInfo.meanRadius * 2} km`}</Typography>
            <Typography>Mass: {`${planetInfo.mass.massValue} * 10^${planetInfo.mass.massExponent} kg`}</Typography>
            <Typography>Gravity: {`${planetInfo.gravity} m/s²`}</Typography>
            <Typography>Density: {`${planetInfo.density} g/cm³`}</Typography>
            <Typography>Moons: {`${planetInfo.moons ? planetInfo.moons.length : 0}`}</Typography>
        </Paper>
    );
};

export default PlanetInfoBox;
