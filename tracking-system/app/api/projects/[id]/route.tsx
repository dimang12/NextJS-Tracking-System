import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

interface ProjectProps {
    params: {
        id: string;
    };
}

export async function GET(req: NextRequest, { params }: ProjectProps) {
    const project = await prisma.project.findUnique({
        where: { proId: parseInt(params.id) },
    });

    if (!project) {
        return NextResponse.json(
            {message: "Project not found"}, 
            {status: 404}
        );
    }
    return NextResponse.json(project);
}

export async function PUT(req: NextRequest, { params }: ProjectProps) {
    const body = await req.json();
    const project = await prisma.project.update({
        where: { proId: parseInt(params.id) },
        data: {
            proName: body.proName,
            proBrief: body.proBrief,
            proDescription: body.proDescription,
            proStatus: body.proStatus,
            proStartDate: body.proStartDate,
            proEndDate: body.proEndDate,
            proCreatedBy: body.proCreatedBy,
        },
    });
    return NextResponse.json(project);
}

export async function DELETE(req: NextRequest, { params }: ProjectProps) {
    const project = await prisma.project.delete({
        where: { proId: parseInt(params.id) },
    });
    return NextResponse.json(project);
}

