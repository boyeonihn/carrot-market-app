import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
  const res = await req.json();
  return NextResponse.json({ res, message: 'ok' });
};
