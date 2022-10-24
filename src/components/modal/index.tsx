import classNames from 'classnames'

import type { ModalProperties } from './types'
import styles from './styles.module.css'

const Modal = ({
  darkMode,
  showModal,
  title,
  children,
  className,
  ...rest
}: ModalProperties) => {
  return showModal ? (
    <div>
      <div className={styles.background}></div>
      <div className={styles.modal} {...rest}>
        <div className={styles.container}>
          <div
            className={classNames(
              styles.content,
              darkMode && styles.darkMode,
              className,
            )}
          >
            <div className={styles.header}>{title}</div>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  ) : null
}

export default Modal
