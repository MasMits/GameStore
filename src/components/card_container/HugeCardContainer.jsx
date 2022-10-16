import React from 'react';
import HugeCard from "../cards/HugeCard";
import SmallCardContainer from "./SmallCardContainer";

const HugeCardContainer = (props) => {
    return (
        <div className="HugeCardContainer">
            <div className=""><HugeCard variant="outlined" id={props.data[0].data.id} data={props.data[0].data}/></div>
            <SmallCardContainer/>
        </div>
    );
};

export default HugeCardContainer;