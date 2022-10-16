import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function MediaCard({id, data}) {

    return (
        <Card sx={{maxWidth: 265, maxHeigth: 403}}>
            <CardMedia
                component="img"
                height="327"
                width="265"
                image={data.header_image}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="subtitle1" component="div">
                    {data.game_name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   200 UAH
                </Typography>
            </CardContent>
        </Card>
    );
}