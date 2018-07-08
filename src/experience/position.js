import React from 'react';


const Position = ({position, date}) => {
    return <div className='date' >
    <h4>{position}</h4>
    <span>{date}</span>
</div>
}

export default Position