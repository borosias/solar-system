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
            <Typography variant="h6">Інформація про об'єкт</Typography>
            <Typography style={{marginTop:'1vw'}}>Назва: {planetInfo.englishName}</Typography>
            <Typography>Діаметр: {`${planetInfo.meanRadius * 2} km`}</Typography>
            <Typography>Маса: {`${planetInfo.mass.massValue} * 10^${planetInfo.mass.massExponent} kg`}</Typography>
            <Typography>Гравітація: {`${planetInfo.gravity} m/s²`}</Typography>
            <Typography>Густота: {`${planetInfo.density} g/cm³`}</Typography>
            <Typography>Супутники: {`${planetInfo.moons ? planetInfo.moons.length : 0}`}</Typography>
        </Paper>
    );
};

export default PlanetInfoBox;
