import React from 'react';

interface DesignErrorPageProps {
}

export const DesignErrorPage = (message:string) => {
    return (
        <div className="hero-body">
            <div className="container">
                <h1 className="title">
                    Uh no, you have reached the error page :(
                </h1>
                <h2 className="subtitle">
                    {message}
                </h2>
            </div>
        </div>
    )
}