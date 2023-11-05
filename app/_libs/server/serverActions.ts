import { getServerActionSession } from '@/_libs/server/session';

export const submitCookieToStorageServerAction = async (cookie: number) => {
  console.log('SUBMIT COOKIES TO STORAGE SERVER');
  const session = await getServerActionSession();
  session.user = { id: cookie };
  await session.save();
};

export const readCookieFromStorageServerAction = async (): Promise<any> => {
  console.log('READ COOKIES FROM STORAGE SERVER');
  const session = await getServerActionSession();
  return session || 'No Cookie Stored!';
};
