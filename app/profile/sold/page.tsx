import Layout from '@/_components/layout';
import Item from '@/_components/item';
const Sold = () => {
  return (
    <Layout title="판매내역" canGoBack>
      <main className="flex flex-col space-y-5 pb-10  divide-y">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Item
            id={i}
            key={i}
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

export default Sold;
