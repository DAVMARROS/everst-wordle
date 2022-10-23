import { Button, Modal } from '../../components'
import { useTimer } from '../../hooks'
import { StatisticsProperties } from './types'
import styles from './styles.module.css'

const Statistics = ({
  darkMode,
  showModal,
  openModal,
}: StatisticsProperties) => {
  const { timer, played, win, loss, currentWord } = useTimer()

  return (
    <Modal showModal={showModal} title="Estadísticas" darkMode={darkMode}>
      <div className={styles.content}>
        <div className={styles.row}>
          <div>
            <div className={styles.number}>{played}</div>
            <div>Jugadas</div>
          </div>
          <div>
            <div className={styles.number}>{win}</div>
            <div>Victorias</div>
          </div>
        </div>
        <div>
          {loss === 'true' && (
            <div className="pb-3">
              LA PALABRA ERA: <strong>{currentWord?.toUpperCase()}</strong>
            </div>
          )}
          <div>SIGUIENTE PALABRA</div>
          <div className={styles.number}>
            {timer?.minutes}:{timer?.seconds}
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Button
          onClick={() => {
            localStorage.setItem('readed', 'true')
            openModal(false)
          }}
        >
          Aceptar
        </Button>
      </div>
    </Modal>
  )
}

export default Statistics
