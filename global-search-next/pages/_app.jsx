import Layout from '@/components/Layout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  console.log(Component.Layout);

  const EmptyLayout = ({ children }) => <>{children}</>;
  const SubLayout = Component.Layout || EmptyLayout;

  return (
    <Layout>
      <SubLayout>
        <Component {...pageProps} />
      </SubLayout>
    </Layout>
  );
}
