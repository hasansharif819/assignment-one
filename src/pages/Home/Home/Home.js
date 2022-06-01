import React from 'react';
import './Home.css';
import pic5 from '../../../assets/image/pic5.webp';

const Home = () => {
    return (
        <div className='banner-class'>
            <div className="text">
                <h2 className="ml-5">This is title</h2>
                <p>This is text part</p>
            </div>
            <div>
                <img height={500} width={350} src={pic5} alt="" />
            </div>
        </div>
    );
};

export default Home;