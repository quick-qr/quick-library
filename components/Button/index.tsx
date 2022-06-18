import { FC, ReactNode } from 'react';
import { colors } from '../../styles/theme';

export interface IQButtonProps { 
    children?: string | ReactNode
    onClick: () => void
}

export const QButton: FC<IQButtonProps> = ({ children, onClick }) => {
    return(
        <>
            <button onClick={onClick}>
                { children }
            </button>

            <style jsx>{`
        
                button {
                    cursor: pointer;
                    background: ${colors.grayscale3};
                    color: ${colors.whiteColor};
                    border-radius: 999px;
                    font-size: 16px;
                    font-weight: 800;
                    padding: 8px 24px;
                    transition: opacity .3s ease;
                    width: 300px;
                    margin-top: 8px;
                }

                button:hover {
                    opacity: .7;
                }

            `}</style>
        </>
    )
}
