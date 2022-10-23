import { ComponentProps } from 'react'

export interface StatisticsProperties extends ComponentProps<'div'> {
  darkMode: boolean
  showModal: boolean
  openModal: (open: boolean) => void
}
