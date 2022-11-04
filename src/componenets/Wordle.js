import React from 'react'
import { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'

export default function Wordle({ solution }) {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn } = useWordle(solution)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)
  
    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup])
  
useEffect(() => {
  console.log(guesses, turn, isCorrect)
}, ['guesses ' + guesses,'turn' + turn, 'iscorrect' +  isCorrect])

  return (
    <div>
      <div>solution- {solution}</div>
      <div>Current guess - { currentGuess }</div>
      <Grid currentGuess = {currentGuess} guesses = {guesses} turn = {turn} />
    </div>
  )
}