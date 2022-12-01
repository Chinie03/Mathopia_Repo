import React from 'react';
import { title } from 'process';
import { Button, Stack } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TheCard, { CardDetails } from './..//components/TheCard';
import MyComp from './..//components/MyComponent';
import GameCards, { GameCardDetails } from '../components/GameCards';
//import GameCards, { GameCardDetails } from './..//components/GameCards';


const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  color: '#cae0f1'
}));

const Cards:CardDetails[] = [
   {title:'Welcome to the world of Mathopia', description:'Are you looking for free online math games? At Mathopia you can find a wide variety of fun games that you can play online. Most games are suitable for elementary and middle grades. They are organized by categories. Enjoy!', image:'/images/math.jpg'},
  ]
const GameCard1:GameCardDetails[] = [
    {title:'The Clock Analog Game', image:'/images/clock.jpg'},
  ]
const GameCard2:GameCardDetails[] = [
    {title:'Inequalities Symbol', image:'/images/inequalities.jpg'},
  ]
const GameCard3:GameCardDetails[] = [
    {title:'Arithmetic Operations', image:'/images/arithmetic.jpg'},
  ]

function Games() {
  return (
    <div className="Games">
      <>
        <MyComp name="Jane" />
        { Cards.map((item,i)=>
            <TheCard key={i} title={item.title} image={item.image} description={item.description}/>
        )}
        <Stack direction="row" spacing={7} marginTop={0} marginLeft={20} alignContent='center'>
          <Item>
              { GameCard1.map((item,i)=><GameCards key={i} title={item.title} image={item.image} />)}
          </Item>
          <Item>
            { GameCard2.map((item,i)=> <GameCards key={i} title={item.title} image={item.image} />)}
          </Item>
          <Item>
            { GameCard3.map((item,i)=> <GameCards key={i} title={item.title} image={item.image} />)}
          </Item>
      </Stack>
        </>
    </div>
  );

}


export default Games;
