import { getIronSession } from "iron-session";
import { NextRequest, NextResponse } from "next/server";
import { SessionData, sessionOptions } from "./config/authentication";

export default async function middleware(request: NextRequest) {
    const response = NextResponse.next();
    const session = await getIronSession<SessionData>(request, response, sessionOptions);
    session.user = "John Doe";
    await session.save();

    return response;
}
