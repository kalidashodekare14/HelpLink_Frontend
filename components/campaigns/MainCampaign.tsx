"use client"
import { useGetTotalCampaignsQuery } from "@/state/services/publicService/campaignsService";
import { useEffect, useState } from "react";
import address from '@bangladeshi/bangladesh-address'
import CampaignFilter from "./CampaignFilter/CampaignFilter";
import CampaignsComponent from "./CampaignsComponent";

const MainCampaign = () => {

    const [division, setDivision] = useState<string>("");
    const [district, setDistrict] = useState<string>("");
    const [upazila, setUpazila] = useState<string>("");
    const [search, setSearch] = useState<string>("");
    const [severity, setSeverity] = useState<string>("");
    console.log('checking severity', severity);

    // Location Data Fetch
    const [divisions, setDivisions] = useState<string[]>([]);
    const [districts, setDistricts] = useState<string[]>([]);
    const [upazilas, setUpazilas] = useState<string[]>([]);

    const [page, setPage] = useState<number>(1);
    console.log('checking page', page);

    // Campaign Data Fetch
    const query = {
        search: search,
        severity: severity,
        division: division,
        district: district,
        upazila: upazila,
        page: page
    }
    const { data: totalCampaign, isLoading: campaignLoading, error: campaignError } = useGetTotalCampaignsQuery(query)


    const handleSearch = (searchValue: string) => {
        setSearch(searchValue);
    }

    useEffect(() => {
        const div = address.allDivision();
        setDivisions(div)
    }, [])

    useEffect(() => {
        if (division) {
            const dist = address.districtsOf(division as any);
            setDistricts(dist);
            setUpazila("");
            setUpazilas([]);
        }
    }, [division])

    useEffect(() => {
        if (district) {
            const upz = address.upazilasOf(district);
            const list = upz.map((item: any) => item.upazila);
            setUpazilas(list);
            setUpazila("");
        }
    }, [district])


    return (
        <div>
            <CampaignFilter
                divisions={divisions}
                districts={districts}
                upazilas={upazilas}
                // set state
                setDivision={setDivision}
                setDistrict={setDistrict}
                setUpazila={setUpazila}
                // value 
                division={division}
                district={district}
                upazila={upazila}
                // search
                handleSearch={handleSearch}
                // severity
                setSeverity={setSeverity}
            />
            <CampaignsComponent
                totalCampaign={totalCampaign}
                campaignLoading={campaignLoading}
                // Pagination
                setPage={setPage}
            />
        </div>
    );
};

export default MainCampaign;