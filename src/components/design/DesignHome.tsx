
import React from "react";
import { LogicSearchBar } from "../logic/LogicSearchBar"
import { LogicHeader } from "../logic/LogicHeader"
import { ItemType, ItemTypeAction } from "../../App"

export interface DesignHomeProps {
    activeItem: string;
    setActiveItem: React.Dispatch<React.SetStateAction<string>>;
    dispatchActiveItemType: React.Dispatch<ItemTypeAction>;
}

export const DesignHome = (props: DesignHomeProps) => {
    return (
        <div className="hero-body">
            <div className="container has-text-centered ">
                <div className="section ">
                    <LogicHeader />
                </div>
                <div className="section">
                    <div className="columns">
                        <div className="column">
                            <p className="content is-size-3" >
                                What does
                            </p>
                        </div>
                        <div className="column">
                            <LogicSearchBar
                                queryType={ItemType.PREDATOR}
                                activeItem={props.activeItem}
                                updateActiveItem={props.setActiveItem}
                                dispatchActiveItemType={props.dispatchActiveItemType}
                                placeholder="Enter a predator name here"
                            />
                        </div>
                        <div className="column">
                            <p className="content is-size-3" >
                                eat?
                    </p>
                        </div>
                    </div>
                </div>
                <div className="section container">
                    <div className="columns">
                        <div className="column">
                            <p className="content is-size-3" >
                                What eats
                            </p>
                        </div>
                        <div className="column">
                            <LogicSearchBar
                                queryType={ItemType.PREY}
                                activeItem={props.activeItem}
                                updateActiveItem={props.setActiveItem}
                                dispatchActiveItemType={props.dispatchActiveItemType}
                                placeholder="Enter a prey name here"
                            />
                        </div>
                        <div className="column">
                            <p className="content is-size-3" >
                                ?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


//          <figure className="image is-40x40 column is-one-fifth"><img src="../eagle_fish_silhouette.png"></img></figure>
//          <figure className="image is-40x40 column is-one-fifth"><img src="../bird_caterpillar_silhouette.png"></img></figure>
