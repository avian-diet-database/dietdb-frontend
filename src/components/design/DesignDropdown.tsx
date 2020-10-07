import React from 'react';

interface DesignDropdownProps {
    criteriaTitle : string;
    criteriaOptions : string[];
    //onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const DesignDropdown = (props: DesignDropdownProps) => {
    return (
        <div className="dropdown is-active">
            <div className="dropdown-trigger">
                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                    <span>{props.criteriaTitle}</span>
                    <span className="icon is-small">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                    <a href="#" className="dropdown-item">
                        1900 (or any other criteria selection)
                    </a>
                    <a className="dropdown-item">
                        1910
                    </a>
                    <a href="#" className="dropdown-item is-active">
                        1920
                    </a>
                    <a href="#" className="dropdown-item">
                        1930
                    </a>     
                    <a href="#" className="dropdown-item">
                        1940
                    </a>
                    <a href="#" className="dropdown-item">
                        1950
                    </a>
                    <a href="#" className="dropdown-item">
                        1960
                    </a>  
                    </div>
                </div>
            </div>
    )
}