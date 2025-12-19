import React from 'react';
import AboutBanner from './AboutBanner/AboutBanner';
import AboutMission from './AboutMission';
import SuccessInfo from '../home/SuccessInfo/SuccessInfo';
import AboutAskQuestion from './AboutAskQuestion';
import AboutOurVolunteer from './AboutOurVolunteer';

const MainAbout = () => {
    return (
        <div>
            <AboutBanner />
            <AboutMission />
            <SuccessInfo />
            <AboutOurVolunteer />
            <AboutAskQuestion />
        </div>
    );
};

export default MainAbout;