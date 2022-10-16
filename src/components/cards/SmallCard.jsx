import * as React from 'react';
import {createTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {ThemeProvider} from "@mui/material";

export default function SmallCard() {
    const darkTheme = createTheme({
        components: {
            // Name of the component
        },
        palette: {
            mode: 'dark',
            primary: {
                light: '#757ce8',
                main: '#ababab',
                dark: '#c9c9c9',
                contrastText: '#2F3131',
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
        <ThemeProvider theme={darkTheme}>
            <Card sx={{ display: 'flex', height: '80px', minWidth: 268}}>
                <CardMedia
                    component="img"
                    sx={{ width: 70 }}
                    image="https://gmedia.playstation.com/is/image/SIEPDC/the-last-of-us-part-ii-desktop-banner-02-en-13nov20?$1600px$"
                    alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="subtitle1" >
                            Одни из нас: Часть II
                        </Typography>
                        <Typography variant="caption" color="text.secondary" component="div" >
                            300 UAH
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
        </ThemeProvider>
    );
}
