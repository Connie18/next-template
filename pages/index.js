import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className='text-base'>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
        </p>
      </section>

      <section className='pt-1 text-base'>
        <h2 className='m-4 text-2xl'>Blog</h2>
        <ul className='m-0 list-none p-0'>
          {allPostsData.map(({ id, date, title }) => (
            <li
              className='m-1 font-medium text-blue-600 hover:underline dark:text-blue-500'
              key={id}
            >
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className='text-gray-600'>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
