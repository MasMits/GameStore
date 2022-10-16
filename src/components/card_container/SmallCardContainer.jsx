import React from 'react';
import SmallCard from "../cards/SmallCard";

const SmallCardContainer = () => {
    return (
        <div>
            <div className="smallCard_container">
                <div className="SmallCardContainer">
                    <SmallCard/>
                    <SmallCard/>
                    <SmallCard/>
                    <SmallCard/>
                    <SmallCard/>
                </div>
            </div>
        </div>
    );
};

export default SmallCardContainer;