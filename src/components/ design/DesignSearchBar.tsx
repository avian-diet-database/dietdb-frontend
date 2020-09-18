import React from "react";

export interface DesignSearchBarProps {
    queryState: string
    dispatchQueryState: React.DispatchWithoutAction;
}

export const DesignSearchBar = (props: DesignSearchBarProps) => {

    return (
        <div className="field has-addons">
            <div className="control">
                <input className="input is-primary" type="text" placeholder={`Search our database...`} />
            </div>
            <div className="control">
                <button className="button" onClick={props.dispatchQueryState} >{props.queryState} </button>
            </div>
        </div>
    )

}

