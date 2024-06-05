//Using use ref hook
import React, { useRef } from 'react';
import 'boxicons';

const Home = () => {
    const greeting = useRef('HELLO ')
    const name = useRef('IM  ANIL GOLLAPALLI')
    const intro = useRef('Im a passionate Web Developer with a knack for creating dynamic and responsive web applications.')


    return (
        <div className='home' id='home'>
            <div className='home-content'>
            <p className='home-greet'>{greeting.current}</p>
            <p className='home-name'>{name.current}</p>
            <p className='home-intro'>{intro.current}</p>
 
            <div>
            <box-icon type="logo" name="facebook-square"></box-icon>
            <box-icon type="logo" name="instagram"></box-icon>
            <box-icon type="logo" name="twitter"></box-icon>
            <box-icon type="logo" name="youtube"></box-icon>
            <box-icon type="logo" name="linkedin"></box-icon>

            </div>

            </div>
            <div>
            <img src='https://image.remaker.ai/datarm/face-swap/ai_face_vary/2024-06-04/output/87436ecd-71e8-46e0-81f6-af7f5bb204d7.png' alt='' className='home-image'/>
            </div>
        </div>
    );
};

export default Home;
