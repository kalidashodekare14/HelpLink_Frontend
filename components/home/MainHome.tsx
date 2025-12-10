"use client";

import AskQuestion from "./AskQuestion/AskQuestion";
import Banner from "./banner/Banner";
import OurMission from "./ourMission/OurMission";
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
        </div>
    );
};

export default MainHome;