import { ExternalLinkIcon } from '@heroicons/react/solid';
import React from 'react';
import pic5 from '../../../../assets/image/pic5.webp';
import './BannerAd.css';

const BannerAd = () => {
    return (
        <div className='banner-class'>
            <div>
                <img height={500} width={350} src={pic5} alt="" />
            </div>
            <div className="text">
                <h2 className="titleClass">BANNER AD</h2>
                <p>Choose between the available banner formats. Highly
                    effective ad for visibility.</p>
                <p>Learn more <ExternalLinkIcon height={15} /></p>
            </div>

        </div>
    );
};

export default BannerAd;