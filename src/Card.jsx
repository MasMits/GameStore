import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import {ThemeProvider} from "@mui/material";


// interface data{
//     id: number;
//     type: string;
//     game_name: string;
//     short_description: string;
//     header_image: string;
//     website: string;
// }


export default function MediaCard({id, data}) {
    // const theme = createTheme({
    //     palette: {
    //         primary: {
    //             light: '#757ce8',
    //             main: '#3f50b5',
    //             dark: '#002884',
    //             contrastText: '#fff',
    //         },
    //         secondary: {
    //             light: '#ff7961',
    //             main: '#f44336',
    //             dark: '#ba000d',
    //             contrastText: '#000',
    //         },
    //     },
    // });
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
                    contrastText: '#fff',
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
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="243"
                    image={data.header_image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="subtitle1" component="div">
                        {data.game_name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {data.short_description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button  variant="outlined" size="small">Learn more</Button>
                </CardActions>
            </Card>
        </ThemeProvider>

    );
}
