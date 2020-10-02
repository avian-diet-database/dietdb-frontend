import React from "react";

interface DesignCriteriaProps {
}

export const DesignCriteria = () => {
    return (
        <div className="tile is-parent">
            <article className="tile is-child notification is-danger">
                <p className="title">Wide tile</p>
                <p className="subtitle">Aligned with the right tile</p>
                <div className="content">
                     Content 
                </div>
            </article>
        </div>
    );
};