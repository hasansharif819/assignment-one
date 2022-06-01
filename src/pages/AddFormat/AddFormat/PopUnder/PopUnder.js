import { ExternalLinkIcon } from '@heroicons/react/solid';
import React from 'react';
import pic2 from '../../../../assets/image/pic2.webp';


const PopUnder = () => {
    return (
        <div className='banner-class'>
            <div>
                <img height={500} width={350} src={pic2} alt="" />
            </div>
            <div className="text">
                <h2 className="titleClass">POP-UNDER</h2>
                <p>This is one of the most popular ads. After user’s click, this
                    ad opens landing page in behind. So, the user experience is
                    not hampered much.</p>
                <p>Learn more <ExternalLinkIcon height={15} /></p>
            </div>

        </div>
    );
};

export default PopUnder;