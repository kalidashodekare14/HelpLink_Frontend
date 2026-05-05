import AskQuestion from "../home/AskQuestion/AskQuestion";
import InfoSection from "../home/InfoSection/InfoSection";
import OurVolunteer from "../home/OurVolunteer/OurVolunteer";
import AboutBanner from "./AboutBanner/AboutBanner";
import AboutMission from "./AboutMission";

const MainAbout = () => {
  return (
    <div>
      <AboutBanner />
      <AboutMission />
      <InfoSection />
      <AskQuestion />
      <div className="mb-10">
        <OurVolunteer />
      </div>
    </div>
  );
};

export default MainAbout;
