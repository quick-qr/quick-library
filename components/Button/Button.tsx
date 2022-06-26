import { FC, ReactNode } from 'react';
import styles from './Button.module.scss'

export interface IQButtonProps { 
    children?: string | ReactNode
    onClick: () => void
}

const QButton: FC<IQButtonProps> = ({ children, onClick }) => {
    return(
        <button onClick={onClick} className={styles.button}>
            { children }
        </button>
    )
};

export default QButton
