import CampaignDetails from "@/components/campaigns/CampaignDetails";
import CampaignDetailsDonate from "@/components/campaigns/CampaignDetailsDonate";


const campaignDetails = () => {
    return (
        <div>
            <CampaignDetails />
            <CampaignDetailsDonate />
        </div>
    );
};

export default campaignDetails;