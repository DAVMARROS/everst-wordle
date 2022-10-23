import { ComponentProps, ReactNode } from 'react'

export interface ModalProperties extends ComponentProps<'div'> {
  darkMode: boolean
  title: string
  children: ReactNode
  showModal: boolean
}
