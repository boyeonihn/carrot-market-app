import twilio from 'twilio';
import { NextResponse } from 'next/server';
import client from '@/_libs/server/client';

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
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

  if (phone) {
    const message = await twilioClient.messages.create({
      messagingServiceSid: process.env.TWILIO_MSID,
      to: process.env.MY_PHONE!,
      body: `Your login token is ${payload}`,
    });

    console.log(message);
  }
  return NextResponse.json({ res, message: 'ok' });
};
