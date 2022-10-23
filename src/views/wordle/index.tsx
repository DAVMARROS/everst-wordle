import classNames from 'classnames'

import { Keyboard } from '../../components'
import { useWordle } from '../../hooks'
import Instructions from '../instructions'
import Statistics from '../statistics'
import styles from './styles.module.css'

const Wordle = () => {
  const {
    attempts,
    darkMode,
    setDarkMode,
    showInstructions,
    setShowInstructions,
    showStatistics,
    setShowStatistics,
    selectKey,
    getWord,
  } = useWordle()

  return (
    <>
      <div className={darkMode ? 'bg-dark' : ''}>
        <div className={styles.container}>
          <div className={styles.content}>
            <header
              className={classNames(styles.header, darkMode && styles.darkMode)}
            >
              <button onClick={() => setShowInstructions(true)}>
                <img
                  src={
                    darkMode
                      ? './instructions-dark.png'
                      : './instructions-light.png'
                  }
                  height={27}
                  width={27}
                />
              </button>
              <div className={darkMode ? styles.titleDark : styles.title}>
                WORDLE
              </div>
              <div className="flex flex-row gap-2.5">
                <button onClick={() => setShowStatistics(true)}>
                  <img
                    src={
                      darkMode
                        ? './statistics-dark.png'
                        : './statistics-light.png'
                    }
                    height={36}
                    width={40}
                  />
                </button>
                <button onClick={() => setDarkMode(!darkMode)}>
                  <img
                    src={darkMode ? './switch-dark.png' : './switch-light.png'}
                    height={30}
                    width={60}
                  />
                </button>
              </div>
            </header>
            <div className={styles.words}>
              {[0, 1, 2, 3, 4].map((line) => {
                return (
                  <div className={styles.line} key={line}>
                    {getWord(line)}
                  </div>
                )
              })}
            </div>
            <Keyboard
              attempts={attempts}
              darkMode={darkMode}
              onPress={selectKey}
            />
          </div>
        </div>
        <Instructions
          darkMode={darkMode}
          showModal={showInstructions}
          openModal={setShowInstructions}
        />
        <Statistics
          darkMode={darkMode}
          showModal={showStatistics}
          openModal={setShowStatistics}
        />
      </div>
    </>
  )
}

export default Wordle
