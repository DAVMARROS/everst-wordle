import { ComponentProps } from 'react'

export interface KeyboardProperties extends ComponentProps<'div'> {
  attempts: string[]
  darkMode: boolean
  onPress: (key: string) => void
}
