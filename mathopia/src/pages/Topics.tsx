import Box from '@mui/material/Box';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid/Grid';
import Stack from '@mui/material/Stack';
import GameCards, { GameCardDetails } from '../components/GameCards';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const GameCard1:GameCardDetails[] = [
     {title:'The Clock Analog Game', image:'/images/clock.jpg'},
   ]
const GameCard2:GameCardDetails[] = [
     {title:'Inequalities Symbol', image:'/images/inequalities.jpg'},
   ]
const GameCard3:GameCardDetails[] = [
     {title:'Arithmetic Operations', image:'/images/arithmetic.jpg'},
   ]

export default function Home(){
    return (
<div className="container">
        <Box
        sx={{
            margin:10,
            padding:5,
            width: 900 ,
            height: 400,
            backgroundColor: '#FFFFFF',
            border:0.5,
            alignContent:"center",
            position:"center",
        }}>   
            <Grid alignContent="center">
                <Stack direction="row" spacing={1} marginTop={3}>
                    <Item>{ GameCard1.map((item,i)=><GameCards key={i} title={item.title} image={item.image} />)}</Item>
                    <Item>{ GameCard2.map((item,i)=><GameCards key={i} title={item.title} image={item.image} />)}</Item>
                    <Item>{ GameCard1.map((item,i)=><GameCards key={i} title={item.title} image={item.image} />)}</Item>
            </Stack>
            </Grid>
            
            <Grid >
            <Stack direction="row" spacing={1} marginTop={3}>
                    <Item>{ GameCard1.map((item,i)=><GameCards key={i} title={item.title} image={item.image} />)}</Item>
                    <Item>{ GameCard1.map((item,i)=><GameCards key={i} title={item.title} image={item.image} />)}</Item>
                    <Item>{ GameCard1.map((item,i)=><GameCards key={i} title={item.title} image={item.image} />)}</Item>
            </Stack>
            </Grid>
            <Grid >
                <Stack direction="row" spacing={1} marginTop={3}>
                    <Item>{ GameCard1.map((item,i)=><GameCards key={i} title={item.title} image={item.image} />)}</Item>
                    <Item>{ GameCard1.map((item,i)=><GameCards key={i} title={item.title} image={item.image} />)}</Item>
                    <Item>{ GameCard1.map((item,i)=><GameCards key={i} title={item.title} image={item.image} />)}</Item>
                    </Stack>
                </Grid>              
        </Box> 
        </div>
    )
}