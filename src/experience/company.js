import React from 'react';

const Company = ({image, name}) => {
    return <div className='company' > 
        <img className='companyLogo' src={image} />
        <h3 >{name}</h3>
    </div>
}
export default Company;