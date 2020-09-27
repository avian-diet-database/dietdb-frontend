import React from 'react';

interface DesignHomeButtonProps {
    itemData: any
}

export const DesignHomeButton = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="button">
                    <a href="main.html">
                        <p id="buttonText">
                            Go Back Home
                        </p>
                    </a>
                </div>
            </div>
        </section>
    )
}