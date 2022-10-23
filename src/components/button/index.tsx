import classNames from 'classnames'

import type { ButtonProperties } from './types'
import styles from './styles.module.css'

const Button = ({ children, className, ...rest }: ButtonProperties) => {
  return (
    <button className={classNames(styles.button, className)} {...rest}>
      {children}
    </button>
  )
}

export default Button
