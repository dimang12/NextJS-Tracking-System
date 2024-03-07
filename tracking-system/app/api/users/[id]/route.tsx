import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/client';

interface Props {
    params: {
        id: number
    }
}

export async function GET(req: NextRequest, {params: {id}}: Props) {
    const user  = await prisma.user.findUnique({
        where: {
            id: Number(id)
        }
    });

    if (!user) {
        return NextResponse.json({ message: 'User not found' }, {status: 404});
    }
    
    return NextResponse.json(user);
}

export async function PUT(req: NextRequest, {params: {id}}: Props) {
    const body = await req.json();

    const user = await prisma.user.findUnique({
        where: {
            id: Number(id)
        }
    });

    if (!user) {
        return NextResponse.json({ message: 'User not found' }, {status: 404});
    }

    const updatedUser = await prisma.user.update({
        where: {
            id: Number(id)
        },
        data: {
            name: body.name,
            email: body.email
        }
    });

    return NextResponse.json(updatedUser);
}

export async function DELETE(req: NextRequest, {params: {id}}: Props) {
    const user = await prisma.user.findUnique({
        where: {
            id: Number(id)
        }
    });

    if (!user) {
        return NextResponse.json({ message: 'User not found' }, {status: 404});
    }

    await prisma.user.delete({
        where: {
            id: Number(id)
        }
    });

    return NextResponse.json({ message: 'User deleted' });
}