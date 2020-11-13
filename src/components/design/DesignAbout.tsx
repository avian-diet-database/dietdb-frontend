import React from "react";

interface DesignAboutProps {

}

export const DesignAbout = () => {
    return (
        <div className="section">
            <div className="container">
                <p className="title is-size-1-">About</p>
                <p className="content">Quantitative information on what different birds
                eat is scattered across the published and grey literature. The Avian Diet Database
                attempts to collate and synthesize these disparate data into one easily accessible
                repository. See our <a className="has-text-info" href="https://github.com/hurlbertlab/dietdatabase/blob/master/AvianDietDatabase.txt">data paper</a>.</p> 
                <p className="title is-size-3">Methods of Quantifying the Diet</p>
                <div className="content">
                    <p className="">Diet is typically assessed by behavioral observation or
                    by examining stomach contents, nest debris, or fecal contents. Regardless of the study
                    method, researchers have historically used three different methods for quantifying the
                    prevalence of a prey type:</p>
                    <div className="content">
                        <ol type="1">
                            <li>Fraction of the diet by number of prey items (e.g., there was evidence
                            of 3 beetles out of 50 total prey items)</li>
                            <li>Fraction of the diet by weight or volume (e.g., beetles comprised 26%
                            of the mass of the total stomach contents)</li>
                            <li>Percent occurrence (e.g., 65% of stomachs examined had at least one beetle)</li>
                        </ol>
                    </div>
                </div>
                <p className="title is-size-3">Feedback</p>
                <div className="content">
                    <p className="">Did you find an error in the database? Do you know of a published study
                    with quantitative diet information that is not included in our database?</p>
                    <p>
                        Let us know! Post an issue on 
                        <a className="has-text-info" href="https://github.com/hurlbertlab/dietdatabase/issues"> this page </a> 
                        by clicking the green ‘New Issue’ button at the top right (requires a Github account), 
                        or send an email to <a className="has-text-info" href="aviandietdb@gmail.com">aviandietdb@gmail.com</a>.  
                    </p>
                </div>
            </div>
        </div>
    )
}