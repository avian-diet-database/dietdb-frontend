import React from 'react';

interface DesignLoadingPageProps {
}

export const DesignLoadingPage = () => {
    return (
        <div className="hero-body">
            <div className="container">
                <h1 className="title">
                    Your content is currently loading!
                    </h1>
                <h2 className="subtitle">
                    Digging through bird database....
                    </h2>
            </div>
        </div>
    )
}