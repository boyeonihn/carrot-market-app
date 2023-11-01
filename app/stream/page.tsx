import Layout from '@/_components/layout';
import Link from 'next/link';
import FloatingButton from '@/_components/floating-button';

const Stream = () => {
  return (
    <Layout title="라이브" hasTabBar>
      <main className="py-10 space-y-4 divide-y-2">
        {[1, 23, 4, 5, 6].map((_, i) => (
          <Link key={i} href={`/live/${i}`}>
            <a className="pt-4 block  px-4">
              <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
              <h1 className="text-2xl mt-2 font-bold text-gray-900">
                Galaxy S50
              </h1>
            </a>
          </Link>
        ))}
        <FloatingButton href="/live/create">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 stroke-[1.5px] fill-none stroke-white"
          >
            <path
              strokeLinecap="round"
              d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        </FloatingButton>
      </main>
    </Layout>
  );
};

export default Stream;
