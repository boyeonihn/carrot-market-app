import Layout from '@/_components/layout';

const Chats = () => {
  return (
    <Layout hasTabBar title="채팅">
      <main className="py-10 divide-y-[1.5px]">
        {[1, 2, 3, 4, 5, 6, 10].map((_, i) => (
          <div
            key={i}
            className="flex px-4 cursor-pointer py-3 border-b items-center space-x-3"
          >
            <div className="w-12 h-12 rounded-full bg-slate-300" />
            <div>
              <p className="font-semibold text-gray-700">Steve Jebs</p>
              <p className="text-sm font-medium text-gray-600">
                See you Tomorrow the corner &rarr;
              </p>
            </div>
          </div>
        ))}
      </main>
    </Layout>
  );
};

export default Chats;
