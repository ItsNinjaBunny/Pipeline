import { type NextPage } from 'next';
import Head from 'next/head';
import { Navigation } from 'src/components/navigation';
import { VerticalAdjustmentBarIcon, CirclePlusIcon, UpDownArrowIcon } from 'src/components/icons';
import { Filter, Data, ClientManager, Card } from 'src/features';
import { useState } from 'react';
import React from 'react';

const ClientsPage: NextPage = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [selected, setSelected] = useState(false);

  const toggleFilter = () => setOpenFilter(prev => !prev);

  const classS = 'fixed top-0 duration-700 '

  return (
    <>
      <Head>
        <title>Clients</title>
      </Head>

      <main className='w-full min-h-screen flex flex-col bg-slate-900'>
        <Navigation />
        <div className={`relative w-full flex flex-col items-center space-y-8 duration-300`}>
          <div className={`flex flex-row w-11/12 justify-between items-center my-4 px-4 py-4 bg-slate-200/80 rounded text-black ${selected ? 'hide--clients' : 'show--clients'}`}>
            <h1 className='text-lg tracking-wider'>
              Clients
            </h1>
            <div className='flex space-x-4'>
              <VerticalAdjustmentBarIcon onClick={toggleFilter} className='w-6 h-6' />
              <CirclePlusIcon className='w-6 h-6' />
            </div>
            {/* <Filter isOpen={openFilter} /> */}
          </div>
          <ClientManager selected={selected} setSelected={setSelected} data={Data} className={`flex flex-col w-11/12 space-y-4`} />
        </div>
      </main>
    </>
  );
}

export default ClientsPage;