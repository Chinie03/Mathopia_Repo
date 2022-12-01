import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export interface GameCardDetails{
    title:string;
    image: string;
    linkone?: string;
}

export default function GameCards(props:GameCardDetails) {
  return (
    <Card sx={{ maxWidth: 200 , textAlign: 'left', marginBottom:'1rem', margin:'2rem', maxHeight:300}}>
      <CardMedia
        component="img"
        height="100"
        image={props.image}
        align-content= 'right'
        background-position='right'
        alt="meme"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="medium" href={props.linkone} variant='contained'style={{ backgroundColor: "#429cf5", borderStyle: "none", float: "right" }}>Select</Button>
      </CardActions>
    </Card>
  );
}
