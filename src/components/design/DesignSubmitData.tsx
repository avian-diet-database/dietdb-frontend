import React from "react";

export const DesignSubmitData = () => {
    return (
            <div className="container">
                <h2 className="title is-size-1">Submit Data</h2>
                <p className="title is-size-1-">What do birds eat?</p>
                <p className="content">Different species eat different things, of course! But how do we know how important a given food type is to a species? The best way to answer this is by examining a sample of all of the things a bird recently ate (or tried to eat), and quantifying the prevalence of each diet item. Quantitative information on what different birds eat is scattered across the published and grey literature. The <strong>Avian Diet Database</strong> attempts to collate and synthesize these disparate data into one easily accessible repository. See our <a className="has-text-info" href="https://github.com/hurlbertlab/dietdatabase/blob/master/AvianDietDatabase.txt">data paper</a> for details.</p> 
                <p className="title is-size-3">Methods of Quantifying the Diet</p>
                <div className="content">
                    <p className="">Diet is typically assessed by behavioral observation or
                    by examining stomach contents, nest debris, pellets (that are coughed up), or fecal contents. Regardless of the study
                    method, researchers have historically used three different methods for quantifying the
                    prevalence of a prey type:</p>
                    <div className="content">
                        <ol type="1">
                            <li><strong>Fraction of the diet by number of prey items</strong> (e.g., there was evidence
                            of 3 beetles out of 50 total prey items)</li>
                            <li><strong>Fraction of the diet by weight or volume</strong> (e.g., beetles comprised 26%
                            of the mass of the total stomach contents)</li>
                            <li><strong>Percent occurrence</strong> (e.g., 65% of stomachs examined had at least one beetle)</li>
                        </ol>
                    </div>
                </div>
                <p className="title is-size-3">Using This Website</p>
                <div className="content">
                    <p className=""><strong>Find out what a particular bird species has been shown to eat</strong> by entering either a scientific or common name on the <strong>Home</strong> or <strong>Diet by Bird</strong> page. If the species you are searching for does not come up in the auto-complete, then you have misspelled the name or it is absent from our database. <em>For some species, studies have never been conducted!</em></p>
                    <p className="">If the species is present in our database, you will see the total number of diet records available and how those diet records are distributed over time, space, season, and "diet type" (the categories mentioned above). By default, you will see diet data summarized at the level of taxonomic Class (e.g., birds, mammals, insects, etc.), but you can re-summarize the data at higher (e.g., animals versus plants) or lower (e.g., beetles versus moths versus leafhoppers) taxonomic levels, but note that the taxonomic resolution with which the original studies classify prey may often be coarse. </p>
                    <p className="">&nbsp;</p>
                    <p className=""><strong>Find out which bird species eat a particular prey item</strong> by entering either a scientific or common name of the prey on the <strong>Home</strong> or <strong>Diet by Prey</strong> page. This will return a list of all bird species in the database for which there is a quantitative diet estimate. Bird species for which multiple studies have been conducted will be represented by a single value per Diet Type which is the mean fraction of the diet across studies.</p>
                </div>
                <p className="title is-size-3">Downloading Results</p>
                <div className="content">
                    <p className="">At the top right corner of the diet results table is a <strong>Download Data</strong> button. Click this to download a .csv file of the table which can be opened with Microsoft Excel or other programs. Users who are familiar with the statistical programming language R may use our <a className="has-text-info" href="https://github.com/ahhurlbert/aviandietdb">R package</a> for working with and exploring the raw data.</p>
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
    )
}
