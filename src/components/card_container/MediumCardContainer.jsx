import * as React from 'react';
import Typography from '@mui/material/Typography';
import {Box, ThemeProvider} from "@mui/material";
import MediaCard from "../cards/MediumCard";
import {createTheme} from "@mui/material/styles";
import Fab from '@mui/material/Fab';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const MediumCardContainer = ({games}) => {

    const darkTheme = createTheme({
        components: {
            // Name of the component
        },
        palette: {
            mode: 'dark',
            primary: {
                light: '#757ce8',
                main: '#2A292A',
                dark: '#1c1b1b',
                contrastText: '#C7C6C6',
            },
            secondary: {
                light: '#ff7961',
                main: '#f44336',
                dark: '#ba000d',
                contrastText: '#000',
            },
        },
    });

    return (
    <div className="MediumCardContainer">
            <ThemeProvider theme={darkTheme}>
            <Box className="header" sx={{ display: 'flex', justifyContent: 'space-between', width:1170}}>
                <div><Typography sx={{color: 'white'}}>Most Popular</Typography></div>

                <div className="arrows_container">
                    <div><Fab size="small" color="primary" aria-label="add">
                        <KeyboardArrowLeftIcon/>
                    </Fab></div>
                    <div><Fab size="small" color="primary" aria-label="right_arrow">
                        <KeyboardArrowRightIcon/>
                    </Fab></div>
                </div>
            </Box>

            <div className="medium_cards">
                {games.map((item) =>
                    <MediaCard variant="outlined" id={item.data.id} data={item.data} />
                )}
            </div>
            </ThemeProvider>
        </div>
    );
}

export default MediumCardContainer;