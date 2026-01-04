"use client";

import AskQuestion from "./AskQuestion/AskQuestion";
import Banner from "./banner/Banner";
import Feedback from "./Feedback/Feedback";
import OurMission from "./ourMission/OurMission";
import OurVolunteer from "./OurVolunteer/OurVolunteer";
import ServiceInfo from "./ServiceInfo/ServiceInfo";
import SuccessInfoComponent from "./SuccessInfo";
import SuccessProject from "./SuccessProject/SuccessProject";

const MainHome = () => {
    return (
        <div>
            <Banner />
            <OurMission />
            <ServiceInfo />
            <SuccessInfoComponent />
            <SuccessProject />
            <AskQuestion />
            <OurVolunteer />
            <Feedback />
        </div>
    );
};

export default MainHome;