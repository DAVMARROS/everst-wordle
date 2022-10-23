import { useEffect, useState } from 'react'

import { getWord } from '../utils'

export interface Timer {
  minutes: string
  seconds: string
}

export default function useTimer() {
  const [timer, setTimer] = useState<Timer | undefined>()
  const [saved, setSaved] = useState<Date>()
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const time = localStorage.getItem('time')
    if (!time) {
      localStorage.setItem('time', new Date().toISOString())
      localStorage.setItem('played', '0')
      localStorage.setItem('win', '0')
      setSaved(new Date(new Date()))
    } else {
      setSaved(new Date(time))
    }
    setSeconds(seconds + 1)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      if (saved) {
        let difference = +saved + 5 * 60 * 1000 - +new Date()
        if (difference < 0) {
          localStorage.setItem('time', new Date().toISOString())
          setSaved(new Date())
          getWord()
          difference = 0
        }
        setTimer(calculateTime(difference))
        setSeconds(seconds + 1)
      }
    }, 1000)
  }, [seconds])

  const calculateTime = (difference: number) => {
    return {
      minutes: Math.floor((difference / 1000 / 60) % 60)
        .toString()
        .padStart(2, '0'),
      seconds: Math.floor((difference / 1000) % 60)
        .toString()
        .padStart(2, '0'),
    }
  }

  return {
    timer,
    played: localStorage.getItem('played'),
    win: localStorage.getItem('win'),
    loss: localStorage.getItem('loss'),
    currentWord: localStorage.getItem('currentWord'),
  }
}
