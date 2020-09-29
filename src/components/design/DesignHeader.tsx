import React from 'react';

interface DesignHeaderProps {
    itemData: any
}

export const DesignHeader = () => {
    return (
        <section className="hero is-small has-text-centered">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title has-text-white" id="titleInfo">
                        Avian Bird Database 
                    </h1>
                    <h2 className="subtitle has-text-white section" id="subtitleInfo">
                        Welcome to a mobile-friendly web page that presents 
                        bird diet information using data compiled by Prof. Hurlbert’s 
                        lab in an interactive and easy to digest manner. 
                    </h2>
                </div>
            </div>
        </section>
    )
}



