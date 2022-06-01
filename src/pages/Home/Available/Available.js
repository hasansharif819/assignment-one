
import { BeakerIcon, SpeakerphoneIcon, PaperAirplaneIcon, StatusOnlineIcon } from '@heroicons/react/solid'

import React from 'react';
import './Available.css';

const Available = () => {
    return (
        <div className='mt-2'>
            <h2>AVAILABLE FOR EVERYONE</h2>
            <p>Here will be a text</p>
            <div className="iconDiv">
                <div>
                    <p>
                        <SpeakerphoneIcon height={200} className="iconClass" />
                    </p>
                    <p>This is Speaker phone icon from hero icon</p>
                    <button>Get Started</button>
                </div>
                <div>
                    <p>
                        <PaperAirplaneIcon height={200} className="iconClass" />
                    </p>
                    <p>This is Paper airplane icon from hero icon</p>
                    <button>Get Started</button>
                </div>
                <div>
                    <p>
                        <StatusOnlineIcon height={200} className="iconClass" />
                    </p>
                    <p>This is Status Online icon from hero icon</p>
                    <button>Get Started</button>
                </div>
            </div>



        </div>
    );
};

export default Available;