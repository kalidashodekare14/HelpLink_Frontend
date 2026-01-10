

export const ROLE_ROUTES: Record<string, string[]> = {
    admin: [
        "/admin_dashboard",
        "/admin_dashboard/manage_user",
        "/admin_dashboard/manage_campaign",
        "/admin_dashboard/manage_donation",
        "/admin_dashboard/profile"
    ],
    volunteer: [
        "/volunteer_dashboard",
        "/volunteer_dashboard/verify_request",
        "/volunteer_dashboard/manage_delivery",
        "/volunteer_dashboard/profile"
    ],
    donor: [
        "/profile",
        "/donate_track",
    ],
    receiver: [
        "/profile",
        "/request_track",
        "/help_request",
    ]
} as const;


export type UserRole = keyof typeof ROLE_ROUTES;