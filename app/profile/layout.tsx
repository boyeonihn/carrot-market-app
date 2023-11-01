import Layout from '@/_components/layout';

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout hasTabBar>{children}</Layout>;
}
