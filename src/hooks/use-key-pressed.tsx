import { useCallback, useEffect, useState } from 'react'

export default function useKeyPressed() {
  const [keyPressed, setKeyPressed] = useState('')

  const onKeyDown = useCallback((event: KeyboardEvent) => {
    setKeyPressed(event.key)
  }, [])

  const onKeyUp = useCallback(() => {
    setKeyPressed('')
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
    }
  }, [])

  return keyPressed
}
