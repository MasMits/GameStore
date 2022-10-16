import React from 'react';
import LargeCard from "../cards/LargeCard";

const LargeCardContainer = ({games}) => {
    return (
        <div>
            <div className="large_cards">
                {games.map((item) =>
                    <LargeCard variant="outlined" id={item.data.id} data={item.data} />
                )}
            </div>
        </div>
    );
};

export default LargeCardContainer;