
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
                <div className="section column">
                    <LogicHeader />
                </div>
                <div className="section">
                    <div className="level">
                        <div className="level-item">
                            <p className="content is-size-3" >
                                What does
                    </p>
                        </div>
                        <div className="level-item">
                            <LogicSearchBar
                                queryType={ItemType.PREDATOR}
                                queryOptions={["Bald Eagle"]}
                                activeItem={props.activeItem}
                                updateActiveItem={props.setActiveItem}
                                dispatchActiveItemType={props.dispatchActiveItemType}
                            />
                        </div>
                        <div className="level-item">
                            <p className="content is-size-3" >
                                eat?
                    </p>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="level">
                        <div className="level-item">
                            <p className="content is-size-3" >
                                What eats
                    </p>
                        </div>
                        <div className="level-item">
                            <LogicSearchBar
                                queryType={ItemType.PREY}
                                queryOptions={["apple", "banana", "apricot", "plantain"]}
                                activeItem={props.activeItem}
                                updateActiveItem={props.setActiveItem}
                                dispatchActiveItemType={props.dispatchActiveItemType}
                            />
                        </div>
                        <div className="level-item">
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
