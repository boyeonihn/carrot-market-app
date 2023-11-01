import Layout from '@/_components/layout';
import Item from '@/_components/item';
const Loved = () => {
  return (
    <Layout canGoBack title="관심 목록">
      <main className="flex flex-col space-y-5 pb-10  divide-y">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Item
            key={i}
            id={i}
            title="iPhone 14"
            price={99}
            comments={1}
            hearts={1}
          />
        ))}
      </main>
    </Layout>
  );
};

export default Loved;
