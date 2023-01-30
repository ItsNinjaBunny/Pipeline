import { type NextPage } from 'next';
import Head from 'next/head'
import { Navigation } from '../components/navigation/Navigation';

const Dashboard: NextPage = () => {

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="nSight Customer Relations done easy" />
      </Head>
      <main className='bg-slate-900 min-h-screen'>
        <Navigation />

      </main>
    </>
  );
}

export default Dashboard;