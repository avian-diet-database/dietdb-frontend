import React from 'react';

interface DesignButtonProps {
    itemData: any
}

export const DesignButton = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="field">
                    <div className="button">
                        <p id="buttonText">
                            About!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}