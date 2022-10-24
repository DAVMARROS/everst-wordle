import classNames from 'classnames'

import Box from '../box'
import type { KeyboardProperties } from './types'
import styles from './styles.module.css'

const Keyboard = ({ attempts, darkMode, onPress }: KeyboardProperties) => {
  const getVariant = (key: string) => {
    if (attempts.some((word) => word.includes(key))) {
      if (localStorage.getItem('currentWord')?.includes(key)) {
        return 'correctKey'
      }
      return 'incorrectKey'
    }
    return
  }

  return (
    <div className={classNames(styles.keyboard, darkMode && styles.darkMode)}>
      <div className={classNames(styles.row, styles.first)}>
        {['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'].map((key) => (
          <Box
            key={key}
            darkMode={darkMode}
            variant={getVariant(key)}
            onClick={() => onPress(key)}
            keyboard
          >
            {key.toUpperCase()}
          </Box>
        ))}
      </div>
      <div className={classNames(styles.row, styles.second)}>
        {['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ñ'].map((key) => (
          <Box
            key={key}
            darkMode={darkMode}
            variant={getVariant(key)}
            onClick={() => onPress(key)}
            keyboard
          >
            {key.toUpperCase()}
          </Box>
        ))}
      </div>
      <div className={classNames(styles.row, styles.third)}>
        <Box
          className="col-span-2"
          darkMode={darkMode}
          onClick={() => onPress('')}
          keyboard
        >
          ENTER
        </Box>
        {['z', 'x', 'c', 'v', 'b', 'n', 'm'].map((key) => (
          <Box
            key={key}
            darkMode={darkMode}
            variant={getVariant(key)}
            onClick={() => onPress(key)}
            keyboard
          >
            {key.toUpperCase()}
          </Box>
        ))}

        <Box
          darkMode={darkMode}
          className="col-span-2 flex items-center justify-center h-full"
          onClick={() => onPress('backspace')}
          keyboard
        >
          <img
            src={darkMode ? './back-dark.png' : './back.png'}
            width={23}
            height={16}
          />
        </Box>
      </div>
    </div>
  )
}

export default Keyboard
