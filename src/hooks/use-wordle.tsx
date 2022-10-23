import { useEffect, useState } from 'react'

import { Box } from 'components'

import { saveWords, updateStatistics } from '../utils'

const getVariant = (
  attempt: string,
  key: string,
  index: number,
): 'correct' | 'warning' | 'incorrect' => {
  const currentWord = localStorage.getItem('currentWord')
  if (currentWord && currentWord[index] === attempt[index]) {
    return 'correct'
  } else if (currentWord?.includes(key)) {
    return 'warning'
  }
  return 'incorrect'
}

export default function useWordle() {
  const [darkMode, setDarkMode] = useState(false)
  const [word, setWord] = useState('')
  const [attempts, setAttempts] = useState<Array<string>>([])
  const [showInstructions, setShowInstructions] = useState(false)
  const [showStatistics, setShowStatistics] = useState(false)

  useEffect(() => {
    const readed = localStorage.getItem('readed')
    if (!readed) {
      setShowInstructions(true)
      saveWords()
    }
    const attemptsJson = localStorage.getItem('attempts')
    if (attemptsJson) {
      setAttempts(JSON.parse(attemptsJson))
    }
  }, [])

  useEffect(() => {
    const currentWord = localStorage.getItem('currentWord')
    if (
      localStorage.getItem('finished') === 'false' &&
      currentWord &&
      attempts.includes(currentWord)
    ) {
      updateStatistics('played')
      updateStatistics('win')
      setShowStatistics(true)
    } else if (
      localStorage.getItem('finished') === 'false' &&
      attempts.length >= 5
    ) {
      updateStatistics('played')
      setShowStatistics(true)
      localStorage.setItem('loss', 'true')
    }
  }, [attempts])

  return {
    attempts,
    darkMode,
    setDarkMode,
    showInstructions,
    setShowInstructions,
    showStatistics,
    setShowStatistics,
    selectKey: (key: string) => {
      let attempt
      if (key == 'back') {
        attempt = word.slice(0, -1)
        setWord(attempt)
      } else {
        attempt = word + key
        setWord(attempt)
      }
      if (attempt.length >= 5) {
        setWord('')
        localStorage.setItem('attempts', JSON.stringify([...attempts, attempt]))
        setAttempts([...attempts, attempt])
      }
    },
    getWord: (index: number) => {
      return [0, 1, 2, 3, 4].map((item) => {
        if (attempts.length > index) {
          return (
            <Box
              darkMode={darkMode}
              key={item}
              variant={getVariant(attempts[index], attempts[index][item], item)}
            >
              {attempts[index][item].toUpperCase()}
            </Box>
          )
        } else if (attempts.length == index) {
          return (
            <Box darkMode={darkMode} key={item}>
              {word[item]?.toUpperCase()}
            </Box>
          )
        }
        return <Box darkMode={darkMode} key={item}></Box>
      })
    },
  }
}
