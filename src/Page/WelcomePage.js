import Button from '@mui/material/Button';
import './WelcomePage.css'
import { useState } from 'react';
import { Modal } from '@mui/base';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { flexbox, Stack } from '@mui/system';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import {useDispatch} from 'react-redux';
import {setGridSize, setPlayersName} from '../Store/actions'; 

const style = {
    position: 'absolute' ,
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height : 200,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    '& .MuiTextField-root': { m: 1, width: '40ch' },
};

const WelcomePage = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');
    const [boardSize, setBoardSize] = useState('');

    const dispatch = useDispatch();
    const handleSubmit =()=>{
        dispatch(setGridSize(parseInt(boardSize)));
        dispatch(setPlayersName(player1, player2));
    }


    return(
        <div className='welcome'>
            <h1>Welcome to Tic-Tac-Toe Game</h1>
            <Button variant='contained' color='success' onClick={handleOpen}>Start</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
            >
            <Box sx={style} display='flex' flexDirection='column'>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                   Enter Game Configuration
                </Typography>
                <TextField label='Grid Size' value={boardSize} onChange={(e)=>setBoardSize(e.target.value)}/>
                <TextField value={player1} variant='outlined' size = 'small' label='First player name' onChange={(e)=>setPlayer1(e.target.value)}/>
                <TextField value={player2} variant='outlined' size = 'small' label ='Second player name' onChange={(e)=>setPlayer2(e.target.value)}/>
                <Button variant='contained' color='error' onClick={handleClose}>Cancel</Button>
                <Button variant='contained' color='success' onClick={handleSubmit}>Submit</Button>
            </Box>
            </Modal>
        </div>
    )
}
export default WelcomePage