import { ComponentProps, ReactNode } from 'react'

export interface ButtonProperties extends ComponentProps<'button'> {
  children: ReactNode
}
