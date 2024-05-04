import connectDb from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
    await connectDb();

    return NextResponse.json({ message: "Hello World" }, { status: 200 });
}