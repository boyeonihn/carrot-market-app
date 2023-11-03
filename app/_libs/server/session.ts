import { unsealData } from 'iron-session/edge';
import { cookies } from 'next/headers';

const session = async () => {
  const cookieStore = cookies();
  const encryptedSession = cookieStore.get(process.env.COOKIE_AUTH!)?.value;

  const sessionState = encryptedSession
    ? await unsealData(encryptedSession, {
        password: process.env.COOKIE_PW!,
      })
    : null;

  return sessionState;
};

export default session;
