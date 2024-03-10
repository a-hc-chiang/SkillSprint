import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 553 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="457"
          image="https://i.pinimg.com/736x/f0/11/89/f01189064f0734596c1dc6e2d21af01c.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Knots & Needles Night
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Saturday, Mar 9 2024
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Submit
        </Button>
      </CardActions>
    </Card>
  );
}