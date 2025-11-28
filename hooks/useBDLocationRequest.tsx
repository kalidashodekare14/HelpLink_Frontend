"use client"
import { useEffect, useState } from "react";
import address from '@bangladeshi/bangladesh-address'

const useBDLocationRequest = () => {

    const [division, setDivision] = useState<string>("");
    const [district, setDistrict] = useState<string>("");
    const [upazila, setUpazila] = useState<string>("");

    const [divisions, setDivisions] = useState<string[]>([]);
    const [districts, setDistricts] = useState<string[]>([]);
    const [upazilas, setUpazilas] = useState<string[]>([]);


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

    return {
        division,
        district,
        upazila,
        divisions,
        districts,
        upazilas,
        setDivision,
        setDistrict,
        setUpazila
    }
};

export default useBDLocationRequest;