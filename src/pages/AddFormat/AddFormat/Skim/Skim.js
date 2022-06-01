import { ExternalLinkIcon } from '@heroicons/react/solid';
import React from 'react';
import pic4 from '../../../../assets/image/pic4.webp';


const Skim = () => {
    return (
        <div className='banner-class'>
            <div>
                <img height={500} width={350} src={pic4} alt="" />
            </div>
            <div className="text">
                <h2 className="titleClass">SKIM</h2>
                <p>SKIM" is a link that a publisher inserts on a specific site
                    element, and after clicking on it, an advertisement appears
                    to the user.
                    SKIM gives 100% control of your sold traffic amount, higher
                    CR to advertisers and CPM rates to publishers.</p>
                <p>Learn more <ExternalLinkIcon height={15} /></p>
            </div>

        </div>
    );
};

export default Skim;