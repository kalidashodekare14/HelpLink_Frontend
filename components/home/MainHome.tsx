"use client";

import Banner from "./banner/Banner";
import OurMission from "./ourMission/OurMission";
import SuccessInfo from "./successInfo/SuccessInfo";

const MainHome = () => {
    return (
        <div>
            <Banner />
            <OurMission />
            <SuccessInfo />
        </div>
    );
};

export default MainHome;