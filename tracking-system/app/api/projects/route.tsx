import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import schema from "./schema";


export async function GET(req: NextRequest) {
    const projects = await prisma.project.findMany();
    return NextResponse.json(projects);
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    const validation = schema.safeParse(body);

    if (!validation.success)
        return NextResponse.json(validation.error.errors, {
            status: 400,
        });

    const project = await prisma.project.create({ 
        data: {
            proName: body.proName,
            proBrief: body.proBrief,
            proDescription: body.proDescription,
            proStatus: body.proStatus,
            proStartDate: body.proStartDate,
            proEndDate: body.proEndDate,
            proCreatedBy: body.proCreatedBy,
        } 
    });
    return NextResponse.json(project);
}