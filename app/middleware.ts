import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    let token = request.cookies.get('next-auth.session-token');
    console.log("Middleware token:", token);

}

export const config = {
    matcher: ["/profile"],
};