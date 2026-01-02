import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server'
import { ROLE_ROUTES, UserRole } from "./lib/role_routes";

export async function proxy(request: NextRequest) {
    let token = request.cookies.get('next-auth.session-token') ?? request.cookies.get('__Secure-next-auth.session-token');

    const tokenVerify = await getToken({ req: request, secret: process.env.NEXT_JWT_SECRET });
    const role = tokenVerify?.role as UserRole;
    const pathname = request.nextUrl.pathname;

    console.log('role and pathname in middleware:', role, pathname);

    if (!token) {
        return NextResponse.redirect(new URL('/signin', request.url));
    }


    if (!role || !(role in ROLE_ROUTES)) {
        return NextResponse.redirect(new URL('/signin', request.url));
    }

    const allowedRoutes = ROLE_ROUTES[role];

    const isAllowed = allowedRoutes.some((route) => pathname.startsWith(route));

    if (!isAllowed) {
        return NextResponse.redirect(new URL('/access_denied', request.url));
    }

    if (pathname === "/access_denied") {
        return NextResponse.next();
    }

    return NextResponse.next();

}

export const config = {
    matcher: [
        "/profile",
        "/donate_track",
        "/request_track",
        "/help_request",
        "/admin_dashboard",
        "/admin_dashboard/manage_user",
        "/admin_dashboard/manage_campaign",
        "/volunteer_dashboard",
        "/volunteer_dashboard/verify_request",
        "/volunteer_dashboard/manage_delivery",
    ]
    ,
};