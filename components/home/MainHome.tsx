"use client";

import AskQuestion from "./AskQuestion/AskQuestion";
import Banner from "./banner/Banner";
import Chatbot from "./Chatbot/Chatbot";
import Feedback from "./Feedback/Feedback";
import InfoSection from "./InfoSection/InfoSection";
import OurMission from "./ourMission/OurMission";
import OurVolunteer from "./OurVolunteer/OurVolunteer";
import ServiceInfo from "./ServiceInfo/ServiceInfo";
import SuccessProject from "./SuccessProject/SuccessProject";

const MainHome = () => {
  return (
    <div>
      <Banner />
      <OurMission />
      <ServiceInfo />
      <SuccessProject />
      <InfoSection />
      <AskQuestion />
      <OurVolunteer />
      <Feedback />
      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default MainHome;
