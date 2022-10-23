import { Box, Button, Modal } from '../../components'
import { InstructionsProperties } from './types'
import styles from './styles.module.css'

const Statistics = ({
  darkMode,
  showModal,
  openModal,
}: InstructionsProperties) => {
  return (
    <Modal showModal={showModal} title="Cómo jugar" darkMode={darkMode}>
      <div>
        Adivina la palabra oculta en cinco intentos. <br />
        <br />
        Cada intento debe ser una palabra válida de 5 letras.
        <br />
        <br />
        Después de cada intento el color de las letras cambia para mostrar qué
        tan cerca estás de acertar la palabra.
      </div>
      <div className={styles.content}>
        <div>Ejemplos</div>
        <div className={styles.line}>
          <Box variant="correct" darkMode={darkMode}>
            G
          </Box>
          <Box
            variant={darkMode ? 'instructionDark' : 'instruction'}
            darkMode={darkMode}
          >
            A
          </Box>
          <Box
            variant={darkMode ? 'instructionDark' : 'instruction'}
            darkMode={darkMode}
          >
            T
          </Box>
          <Box
            variant={darkMode ? 'instructionDark' : 'instruction'}
            darkMode={darkMode}
          >
            O
          </Box>
          <Box
            variant={darkMode ? 'instructionDark' : 'instruction'}
            darkMode={darkMode}
          >
            S
          </Box>
        </div>
        <div>
          La letra <strong>G</strong> está en la palabra y en la posición
          correcta.
        </div>
        <div className={styles.line}>
          <Box
            variant={darkMode ? 'instructionDark' : 'instruction'}
            darkMode={darkMode}
          >
            V
          </Box>
          <Box
            variant={darkMode ? 'instructionDark' : 'instruction'}
            darkMode={darkMode}
          >
            O
          </Box>
          <Box variant="warning" darkMode={darkMode}>
            C
          </Box>
          <Box
            variant={darkMode ? 'instructionDark' : 'instruction'}
            darkMode={darkMode}
          >
            A
          </Box>
          <Box
            variant={darkMode ? 'instructionDark' : 'instruction'}
            darkMode={darkMode}
          >
            L
          </Box>
        </div>
        <div>
          La letra <strong>C</strong> está en la palabra pero en la posición
          incorrecta.
        </div>
        <div className={styles.line}>
          <Box
            variant={darkMode ? 'instructionDark' : 'instruction'}
            darkMode={darkMode}
          >
            C
          </Box>
          <Box
            variant={darkMode ? 'instructionDark' : 'instruction'}
            darkMode={darkMode}
          >
            A
          </Box>
          <Box
            variant={darkMode ? 'instructionDark' : 'instruction'}
            darkMode={darkMode}
          >
            N
          </Box>
          <Box
            variant={darkMode ? 'instructionDark' : 'instruction'}
            darkMode={darkMode}
          >
            T
          </Box>
          <Box variant="incorrect" darkMode={darkMode}>
            O
          </Box>
        </div>
        <div>
          La letra <strong>O</strong> no está en la palabra.
        </div>
        <div>
          Puede haber letras repetidas. Las pistas son independientes para cada
          letra.
        </div>
      </div>
      <div className={styles.footer}>
        <div>¡Una palabra nueva cada 5 minutos!</div>
        <Button onClick={() => openModal(false)}>!JUGAR¡</Button>
      </div>
    </Modal>
  )
}

export default Statistics
