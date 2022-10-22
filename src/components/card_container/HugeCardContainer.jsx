import React from 'react';
import HugeCard from "../cards/HugeCard";
import SmallCard from "../cards/SmallCard";

const HugeCardContainer = (props) => {
    return (
        <div className="HugeCardContainer">
            <div className=""><HugeCard variant="outlined" id={props.data[0].data.id} data={props.data[0].data}/></div>
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
        </div>
    );
};

export default HugeCardContainer;