import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Home(){
    return (
        <div className='container'>
        <Box
        sx={{
            textAlign:"center",
            margin:0.5,
            padding: 5,
            width: 300,
            height: 500,
            backgroundColor: '#FFFFFF',
            border:0.5,
        }}><TextField id="outlined-basic" label="Outlined" variant="outlined" />      
        </Box>
        </div> 
    )
}