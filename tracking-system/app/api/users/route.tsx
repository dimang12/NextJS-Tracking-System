import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import schema from "./schema";


export async function GET(req: NextRequest) {
     const users = await prisma.user.findMany()
    return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    
    //validate the request body
    const validation = schema.safeParse(body);
    if (!validation.success)
    return NextResponse.json(validation.error.errors, {
      status: 400,
    });

    const user = await prisma.user.findUnique({
        where: { email: body.email },
      });

    if (user) {
        return NextResponse.json({ message: 'User already exists' }, {status: 400});
    }

    const newUser = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email,
            password: '', // Add the required 'password' property
        },
    });

    return NextResponse.json(newUser, {status: 201});
}
