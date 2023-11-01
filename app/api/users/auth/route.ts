import { NextResponse } from 'next/server';
import client from '@/_libs/server/client';

export const POST = async (req: Request) => {
  const res = await req.json();
  const { phone, email } = res;
  const user = phone ? { phone } : email ? { email } : null;

  if (!user) return NextResponse.json({ status: 400 });

  const payload = Math.floor(100000 + Math.random() * 900000) + '';
  console.log('paylod', payload);

  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: 'Anonymous',
            ...user,
          },
        },
      },
    },
  });

  console.log('token', token);

  return NextResponse.json({ res, message: 'ok' });
};
