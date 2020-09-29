import React from 'react';

interface DesignHomeButtonProps {
    itemData: any
}

export const DesignHomeButton = () => {
    return (
        <section className="section" id="logicButton">
            <div className="container">
                <div className="button">
                        <p id="buttonText">
                            Go Back Home
                        </p>
                </div>
            </div>
        </section>
    )
}