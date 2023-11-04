import { NextResponse, NextRequest } from 'next/server';
import client from '@/_libs/server/prismaClient';

export async function GET() {
  await client.user.create({
    data: {
      email: 'asdf@gmail.com',
      name: 'Asdf',
    },
  });
  return NextResponse.json({
    ok: true,
  });
}
