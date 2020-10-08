import React from 'react';

interface DesignErrorPageProps {
}

export const DesignErrorPage = () => {
    return (
        <section className="hero is-primary">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        Uh no, you have reached the error page :(
                    </h1>
                    <h2 className="subtitle">
                        Please return home and try again!
                    </h2>
                </div>
            </div>
        </section>
    )
}