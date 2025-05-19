import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PageComponents from '@src/PageComponents';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'], null, ['en', 'fr']))
    }
  };
};

function HomePage() {
  return <PageComponents />;
}
export default HomePage;
