
export interface IDonor {
    _id: string;
    donor_email: string;
    amount: number;
    message: string;
    date: string;
    status: string;
}

export interface ICampaignLocation {
    division: string;
    district: string;
    upazila: string;
    address: string;
}

export interface ICampaign {
    _id: string;
    image: string[];
    title: string;
    description: string;
    category: string;
    request_status: string;
    delivery_status: string;
    receiver_email: string;
    location: ICampaignLocation;
    donors: IDonor[];
}


export interface ICampaignResponse {
    success: boolean;
    message: string;
    data: {
        total: number;
        page: number;
        limit: number;
        data: ICampaign[];
    };
}

export interface ICampaignDetailsResponse {
    success: boolean;
    message: string;
    data: ICampaign;

}