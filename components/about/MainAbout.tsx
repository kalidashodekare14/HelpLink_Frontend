import React from 'react';
import AboutBanner from './AboutBanner/AboutBanner';
import AboutMission from './AboutMission';
import SuccessInfo from '../home/SuccessInfo/SuccessInfo';
import AboutAskQuestion from './AboutAskQuestion';

const MainAbout = () => {
    return (
        <div>
            <AboutBanner />
            <AboutMission />
            <SuccessInfo />
            <AboutAskQuestion />
        </div>
    );
};

export default MainAbout;