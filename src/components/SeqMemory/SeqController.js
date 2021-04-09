import React, { useState,  useEffect } from "react";
import { Container } from 'react-bootstrap';
import { SeqMemory } from './SeqMemory'
import { SeqMemoryShow } from './SeqMemoryShow'
import './SeqMemory.scss'

export const SeqController = ({setUserScore, setScreen, nextScreen}) => { 
    const [startGame, setStartGame] = useState(false)
    
    const handleStartGame = () => {
        setStartGame(!startGame)
        console.log('here')
    }

    return (
        <Container className="seqController">
        {!startGame && 
            <SeqMemoryShow setStartGame ={handleStartGame}/>
        }
        {startGame && 
            <SeqMemory setUserScore = {setUserScore} setScreen = {setScreen} nextScreen={nextScreen}/>
        }
        </Container>
    );
}