"use client"
import { Box, Container, Typography } from '@mui/material';
import { useParams } from 'next/navigation';
// type serviceType = {
//     id: string;
//     title: string;
//     description: string;
//     image: string;
// }

const ServiceDetailsInfo = () => {
    const { id } = useParams();
    const serviceData = [
        {
            "id": "medical_help",
            "title": "Medical Help for Critical Patients",
            "description": "Access to proper healthcare is a basic human right, yet for millions of financially vulnerable people, quality medical treatment remains out of reach. This medical help campaign is dedicated to supporting critically ill patients who are unable to afford essential healthcare services. Sudden illness, severe accidents, or long-term diseases often place an overwhelming financial burden on families, forcing them to delay or completely stop treatment.\n\nMany patients require immediate hospitalization, emergency surgeries, or intensive care unit (ICU) support to survive. Due to financial hardship, treatment is frequently postponed, leading to worsening health conditions and sometimes irreversible loss of life. This campaign was created to ensure that no patient is denied life-saving medical care simply because of economic limitations.\n\nFunds collected through this campaign are used to cover hospital admission costs, emergency and critical surgeries, ICU charges, diagnostic tests such as blood examinations and imaging, essential medicines, oxygen support, and post-treatment recovery care. For patients suffering from chronic and life-threatening diseases like cancer, kidney failure, heart disease, or severe infections, ongoing treatment and continuous medical monitoring are also supported.\n\nTimely medical assistance can mean the difference between life and death. When patients receive proper treatment at the right time, recovery chances increase, pain and suffering are reduced, and families are spared from emotional and financial devastation. This campaign not only supports medical treatment but also provides emotional relief to families who are overwhelmed by fear, uncertainty, and financial stress.\n\nEvery donation, regardless of size, plays a vital role in saving lives. Your contribution helps patients regain hope, dignity, and a fair chance at recovery. By supporting this medical help campaign, you become part of a compassionate mission to stand beside patients during their most difficult moments and help build a healthier, more humane society.",
            "image": "https://i.ibb.co.com/7tMJcchW/charity-box-being-prepared-donation.jpg"
        },
        {
            "id": "healthy_food",
            "title": "Healthy Food Support for Poor Families",
            "description": "Access to healthy and nutritious food is essential for a healthy life, yet millions of underprivileged families struggle every day to meet even their basic food requirements. This healthy food support campaign is designed to provide nutritious meals to children, elderly people, and low-income households who suffer from hunger and malnutrition due to poverty, unemployment, or unexpected life challenges.\n\nMany families are forced to survive on inadequate or unhealthy food, which negatively impacts physical growth, mental development, and overall well-being. Children are especially vulnerable, as a lack of proper nutrition can affect their learning ability, immunity, and long-term health. Elderly individuals often face severe health complications due to poor diet and food insecurity. This campaign aims to address these challenges by ensuring access to balanced and nutritious food.\n\nDonations collected through this campaign are used to supply essential food items such as rice, vegetables, lentils, protein-rich foods, milk, and clean drinking water. Special attention is given to maintaining food quality and nutritional value so that beneficiaries receive meals that truly support their health and strength. In emergency situations, food packages and cooked meals are also distributed to families facing sudden crises.\n\nProper nutrition plays a vital role in preventing diseases, strengthening immunity, and improving quality of life. By providing healthy food on a regular basis, this campaign helps families regain stability, energy, and hope. It reduces the daily stress of hunger and allows parents to focus on their children’s education and future rather than worrying about their next meal.\n\nEvery contribution, no matter how small, makes a meaningful impact. Your support helps fight hunger, malnutrition, and food insecurity while restoring dignity to vulnerable communities. By supporting this healthy food campaign, you are standing with humanity and helping build a healthier, stronger, and more compassionate society.",
            "image": "https://i.ibb.co.com/4nDvnhjM/smiley-female-volunteer-holding-box-with-donations.jpg"
        },
        {
            "id": "education_support",
            "title": "Education Support for Underprivileged Children",
            "description": "Education is the foundation of a better and more secure future, yet millions of underprivileged children are unable to continue their studies due to financial hardship. This education support campaign is dedicated to helping children from low-income families access quality education without barriers. Poverty, lack of resources, and family responsibilities often force children to drop out of school at an early age, limiting their opportunities and potential.\n\n Many families struggle to afford basic educational expenses such as school admission fees, textbooks, uniforms, stationery, and examination costs. In today’s digital world, access to online learning tools and educational technology has also become essential, yet remains out of reach for many students. This campaign aims to bridge that gap by providing comprehensive educational support to children who are eager to learn but lack the necessary resources.\n\nDonations collected through this campaign are used to cover school and college admission fees, books, uniforms, stationery, exam fees, and digital learning materials such as online courses, devices, and internet access where possible. Special attention is given to ensuring that children receive continuous support throughout the academic year so that their education is not interrupted.\n\nEducation empowers children with knowledge, skills, confidence, and critical thinking abilities that enable them to build a better life. When children are educated, families become stronger, communities grow more resilient, and future generations gain new opportunities. This campaign not only supports academic learning but also inspires hope, ambition, and self-belief in young minds.\n\nEvery contribution is an investment in the future. By supporting this education campaign, you help children break the cycle of poverty, unlock their potential, and move toward a brighter, more dignified future. Together, we can ensure that no child is denied education simply because of financial limitations.",
            "image": "https://i.ibb.co.com/QFchSSL0/smiley-volunteers-posing-together-with-food-donation-boxes.jpg"
        },
        {
            "id": "residence_support",
            "title": "Safe Residence Support for Homeless Families",
            "description": "A safe and secure home is a fundamental human need, yet countless families are forced to live without proper shelter due to poverty, natural disasters, displacement, or unexpected life crises. This residence support campaign is designed to provide safe housing solutions for homeless and displaced families who are struggling to survive without basic living conditions. The absence of stable shelter exposes families to health risks, insecurity, and loss of dignity.\n\nMany families live in unsafe environments without protection from extreme weather conditions such as heavy rain, cold, or intense heat. Lack of proper sanitation, clean water, and privacy further increases the risk of illness, especially for children, elderly individuals, and women. This campaign aims to address these urgent needs by ensuring access to secure and hygienic shelter.\n\nDonations collected through this campaign are used to provide temporary housing, essential household items, clean bedding, sanitation facilities, safe drinking water, and basic utilities. In emergency situations, support is also extended to families affected by floods, fires, or forced displacement, helping them find immediate shelter and stability.\n\nA stable home provides more than just physical safety—it offers emotional security, improved health, and a foundation for rebuilding life. With a safe place to live, children can return to school, adults can seek employment, and families can regain a sense of normalcy and hope.\n\nEvery contribution helps restore dignity and security to families in need. By supporting this residence campaign, you are giving vulnerable families the opportunity to rebuild their lives, move toward independence, and create a safer and more hopeful future.",
            "image": "https://i.ibb.co.com/sp0RLkgJ/sorting-point-volunteers-facial-masks-working-with-donations-sorting.jpg"
        }
    ]

    const filterData = serviceData.filter((data) => data.id === id);
    const serviceInfo = filterData[0];


    return (
        <Container maxWidth="lg">
            <Box>
                <img className='w-full h-[400px]' src={serviceInfo?.image} alt="" />
                <Typography sx={{ fontSize: "30px", my: "20px", textTransform: "uppercase" }}>{serviceInfo?.title}</Typography>
                <Typography sx={{ my: "20px", lineHeight: "30px", color: "text.secondary" }}>{serviceInfo?.description}</Typography>
            </Box>
        </Container>
    );
};

export default ServiceDetailsInfo;