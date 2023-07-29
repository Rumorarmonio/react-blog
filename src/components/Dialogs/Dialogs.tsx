import React from 'react'
import styles from './Dialogs.module.scss'

function Dialogs() {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                <div className={styles.dialog + ' ' + styles.active}>
                    Dimych
                </div>
                <div className={styles.dialog}>
                    Semen
                </div>
                <div className={styles.dialog}>
                    Andrey
                </div>
                <div className={styles.dialog}>
                    Sasha
                </div>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>Hi</div>
                <div className={styles.message}>How are you?</div>
                <div className={styles.message}>Yo!</div>
            </div>
        </div>
    )
}

export default Dialogs
