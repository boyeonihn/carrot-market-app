import twilio from 'twilio';
import { NextResponse } from 'next/server';
import client from '@/_libs/server/client';
import sendEmail from '@/_libs/server/nodemailerClient';
import { sealData } from 'iron-session';
import { cookies } from 'next/headers';

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
export const POST = async (req: Request) => {
  const res = await req.json();
  const { phone, email } = res;
  const user = phone ? { phone } : email ? { email } : null;

  if (!user) return NextResponse.json({ status: 400 });

  const tokenPayload = Math.floor(100000 + Math.random() * 900000) + '';

  const token = await client.token.create({
    data: {
      payload: tokenPayload,
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
    // const message = await twilioClient.messages.create({
    //   messagingServiceSid: process.env.TWILIO_MSID,
    //   to: process.env.MY_PHONE!,
    //   body: `Your login token is ${tokenPayload}`,
    // });
    // console.log(message);
  } else if (email) {
    // sendEmail(email, tokenPayload);
  }
  const encryptedSession = await sealData(JSON.stringify(token.userId), {
    password: process.env.COOKIE_PW!,
  });
  console.log({ encryptedSession }, `userId is ${token.userId}`);
  cookies().set('auth', encryptedSession);

  return NextResponse.json({ ok: true }, { status: 200 });
};
