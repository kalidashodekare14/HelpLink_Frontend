import HomeIcon from '@mui/icons-material/Home';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import CampaignIcon from '@mui/icons-material/Campaign';

export const AdminRoutes = [
    {
        id: 1,
        name: "Home",
        path: "/dashboard",
        icon: HomeIcon
    },
    {
        id: 2,
        name: "Manage User",
        path: "/dashboard/manage_user",
        icon: GroupAddIcon
    },
    {
        id: 3,
        name: "Manage Campaign",
        path: "/dashboard/manage_campaign",
        icon: CampaignIcon
    },
]
