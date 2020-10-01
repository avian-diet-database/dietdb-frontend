import React from 'react';

interface DesignButtonProps {
    buttonText: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const DesignButton = (props: DesignButtonProps) => {
    return (
        <div className="field">
            <button className="button" onClick={props.onClick}>
                {props.buttonText}
            </button>
        </div>
    )
}