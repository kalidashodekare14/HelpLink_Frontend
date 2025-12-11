"use client";

import AskQuestion from "./AskQuestion/AskQuestion";
import Banner from "./banner/Banner";
import OurMission from "./ourMission/OurMission";
import OurVolunteer from "./OurVolunteer/OurVolunteer";
import ServiceInfo from "./ServiceInfo/ServiceInfo";
import SuccessInfo from "./SuccessInfo/SuccessInfo";

const MainHome = () => {
    return (
        <div>
            <Banner />
            <OurMission />
            <ServiceInfo />
            <SuccessInfo />
            <AskQuestion />
            <OurVolunteer />
        </div>
    );
};

export default MainHome;