import HomeIcon from '@mui/icons-material/Home';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import CampaignIcon from '@mui/icons-material/Campaign';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

export const AdminRoutes = [
    {
        id: 1,
        name: "Overview",
        path: "/admin_dashboard",
        icon: HomeIcon
    },
    {
        id: 2,
        name: "Manage User",
        path: "/admin_dashboard/manage_user",
        icon: GroupAddIcon
    },
    {
        id: 3,
        name: "Manage Campaign",
        path: "/admin_dashboard/manage_campaign",
        icon: CampaignIcon
    },
]
export const VolunteerRoutes = [
    {
        id: 1,
        name: "Overview",
        path: "/volunteer_dashboard",
        icon: HomeIcon
    },
    {
        id: 2,
        name: "Verify Request",
        path: "/volunteer_dashboard/verify_request",
        icon: VerifiedUserIcon
    },
    {
        id: 3,
        name: "Manage Delivery",
        path: "/volunteer_dashboard/manage_delivery",
        icon: LocalShippingIcon
    },
]
