import React from 'react';
import { title } from 'process';
import { Button } from '@mui/material';
import TheCard, { CardDetails } from './..//components/TheCard';
import MyComp from './..//components/MyComponent';
import { GameCardDetails } from '../components/GameCards';
//import GameCards, { GameCardDetails } from './..//components/GameCards';


const Cards:CardDetails[] = [
   {title:'Welcome to the world of Mathopia', description:'Are you looking for free online math games? At Mathopia you can find a wide variety of fun games that you can play online. Most games are suitable for elementary and middle grades. They are organized by categories. Enjoy!', image:'/images/math.jpg'},
  ]
const GameCards:GameCardDetails[] = [
    {title:'Welcome to the world of Mathopia', description:'Are you looking for free online math games? At Mathopia you can find a wide variety of fun games that you can play online. Most games are suitable for elementary and middle grades. They are organized by categories. Enjoy!', image:'/images/math.jpg'},
  ]

function Games() {
  return (
    <div className="Games">
        <MyComp name="You Beautiful Thing" />
        { Cards.map((item,i)=>
            <TheCard key={i} title={item.title} image={item.image} description={item.description}/>
        )}
        { Cards.map((item,i)=>
            <GameCard key={i} title={item.title} image={item.image} description={item.description}/>
        )}
    </div>
  );

}


export default Games;
