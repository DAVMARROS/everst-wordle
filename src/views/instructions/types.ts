import { ComponentProps } from 'react'

export interface InstructionsProperties extends ComponentProps<'div'> {
  darkMode: boolean
  showModal: boolean
  openModal: (open: boolean) => void
}
