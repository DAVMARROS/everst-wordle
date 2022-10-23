import { ComponentProps, ReactNode } from 'react'

export interface BoxProperties extends ComponentProps<'button'> {
  darkMode: boolean
  variant?:
    | 'correct'
    | 'warning'
    | 'incorrect'
    | 'correctKey'
    | 'incorrectKey'
    | 'instruction'
    | 'instructionDark'
  keyboard?: boolean
  onPress?: () => void
  children?: ReactNode
}
