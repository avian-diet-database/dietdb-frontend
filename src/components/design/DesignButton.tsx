import React from 'react';

interface DesignButtonProps {
    itemData: any
}

export const DesignButton = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="button">
                    <a href="main.html">
                        <p id="buttonText">
                            About + Contact Information
                        </p>
                    </a>
                </div>
            </div>
        </section>
    )
}