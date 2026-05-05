import AskQuestion from "../home/AskQuestion/AskQuestion";
import OurVolunteer from "../home/OurVolunteer/OurVolunteer";
import SuccessInfo from "../home/SuccessInfo/SuccessInfo";
import AboutBanner from "./AboutBanner/AboutBanner";
import AboutMission from "./AboutMission";

const MainAbout = () => {
  return (
    <div>
      <AboutBanner />
      <AboutMission />
      <SuccessInfo />
      <OurVolunteer />
      <AskQuestion />
    </div>
  );
};

export default MainAbout;
