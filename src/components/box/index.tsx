import classNames from 'classnames'

import type { BoxProperties } from './types'
import styles from './styles.module.css'

const Box = ({
  darkMode,
  variant,
  children,
  onPress,
  keyboard,
  className,
  ...rest
}: BoxProperties) => {
  return (
    <button
      className={classNames(
        styles.box,
        variant && styles[variant],
        darkMode && styles.darkMode,
        keyboard && styles.keyboard,
        darkMode && keyboard && styles.keyboardDarkMode,
        !children && styles.empty,
        className,
      )}
      disabled={!keyboard || localStorage.getItem('finished') === 'true'}
      onClick={onPress}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Box
