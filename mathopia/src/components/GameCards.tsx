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
    description: string;
    linkone?: string;
}

export default function GameCards(props:GameCardDetails) {
  return (
    <Card sx={{ maxWidth: 100, textAlign: 'left', marginBottom:'1rem', margin:'2rem'}}>
      <CardMedia
        component="img"
        height="150"
        image={props.image}
        alt="meme"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {props.description}
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" href={props.linkone} variant='contained'style={{ backgroundColor: "#aa92df", borderStyle: "none", float: "right" }}>no</Button>
      </CardActions>
    </Card>
  );
}
