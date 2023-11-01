import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
  const res = await req.json();
  console.log('res', res);
  console.log('res email', res.email);
  console.log('body', req.body);
  return NextResponse.json({ res });
};
