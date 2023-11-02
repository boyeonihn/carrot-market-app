import { NextResponse } from 'next/server';
import client from '@/_libs/server/client';

export const POST = async (req: Request) => {
  const res = await req.json();
  const { token } = res;

  return NextResponse.json({ ok: true }, { status: 200 });
};
