import { ExternalLinkIcon } from '@heroicons/react/solid';
import React from 'react';
import pic3 from '../../../../assets/image/pic3.webp';


const Native = () => {
    return (
        <div className='banner-class'>
            <div>
                <img height={500} width={350} src={pic3} alt="" />
            </div>
            <div className="text">
                <h2 className="titleClass">NATIVE</h2>
                <p>Ad format with the image and the title, that perfectly fits into
                    the content of the site.
                    Native ads are placed in the most visible areas of the page
                    and, thus, this format shows good results and the level of
                    interaction.
                </p>
                <p>Learn more <ExternalLinkIcon height={15} /></p>
            </div>

        </div>
    );
};

export default Native;