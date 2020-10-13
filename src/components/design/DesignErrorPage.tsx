import React from 'react';

interface DesignErrorPageProps {
    errorMessage:string
}

export const DesignErrorPage = (props:DesignErrorPageProps) => {
    return (
        <div className="hero-body">
            <div className="container">
                <h1 className="title">
                    {props.errorMessage}
                </h1>
            </div>
        </div>
    )
}