import React from 'react';
import LargeCard from "../cards/LargeCard";

const LargeCardContainer = ({games}) => {
    return (
        <div>
            <div className="large_cards">
                {/*{games.map((item) =>*/}
                {/*    <LargeCard variant="outlined" id={item.data.id} data={item.data} />*/}
                {/*)}*/}
                <LargeCard variant="outlined" id={games[0].data.id} data={games[0].data}/>
                <LargeCard variant="outlined" id={games[1].data.id} data={games[1].data}/>
                <LargeCard variant="outlined" id={games[2].data.id} data={games[2].data}/>
            </div>
        </div>
    );
};

export default LargeCardContainer;