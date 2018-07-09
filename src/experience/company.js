import React from 'react';

const Company = ({image, name}) => {
    return <div className='company' > 
        <h3 >{name}</h3>
        <img className='companyLogo' src={image} alt="" />
    </div>
}
export default Company;