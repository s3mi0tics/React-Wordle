import React from 'react'
import { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'
import Keypad from './Keypad'


export default function Wordle({ solution }) {
  const { currentGuess, guesses, turn, isCorrect, usedKeys, handleKeyup } = useWordle(solution)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    if (isCorrect){
      console.log("congrats, you win!")
      window.removeEventListener('keyup', handleKeyup)
    }

    if(turn > 5) {
      console.log('unlucky, out of guesses')
      window.removeEventListener('keyup', handleKeyup)
    }
  
    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup, isCorrect, turn])
  
useEffect(() => {
  console.log(guesses, turn, isCorrect)
}, [guesses, turn, isCorrect])

  return (
    <div>
      <div>solution - {solution}</div>
      <div>Current Guess - {currentGuess}</div>
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
      <Keypad usedKeys={usedKeys} />
    </div>
  )
}
