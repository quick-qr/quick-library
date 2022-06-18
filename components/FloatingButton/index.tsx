import { FC, ReactNode } from 'react';
import { colors } from '../../styles/theme';

export interface QFloatingButtonProps { 
    onClick: () => void
}

export const QFloatingButton: FC<QFloatingButtonProps> = ({ onClick }) => {
    return(
        <>
            <div onClick={onClick}>
                +
            </div>

            <style jsx>{`
        
                div {
                    height: 60px;
                    width: 60px;
                    cursor: pointer;
                    background-color: ${colors.primary};
                    color: ${colors.whiteColor};
                    border-radius: 999px;
                    font-size: 20px;
                    font-weight: 800;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, .2);
                    transition: opacity .3s ease;
                }

                button:hover {
                    opacity: .7;
                }

            `}</style>
        </>
    )
}
