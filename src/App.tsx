import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Pagination } from './components/Pagination';
import { Sort } from './components/Sort';
import { SpaceXCard } from './components/SpaceXCard';
import { fetchGetSpaceX } from './api';

function App() {
  const [page, setPage] = React.useState(1);
  const [sort, setSort] = React.useState<'asc' | 'desc'>('asc');

  const {
    data: spacex,
    isLoading,
    status,
  } = useQuery(['spacex', page, sort], () => fetchGetSpaceX({ page, sort }), {
    keepPreviousData: true,
    refetchOnWindowFocus: true,
  });

  if (status === 'error') {
    return (
      <div className="alert alert-error w-80 fixed bottom-5 right-5">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>Произошла ошибка :(</span>
      </div>
    );
  }

  if (isLoading) {
    return <span className="loading fixed top-1/2 left-1/2 loading-dots loading-lg"></span>;
  }

  return (
    <div className=" my-10 h-screen grid place-items-center grid-cols-12 gap-10 row-auto">
      <div className="flex col-span-12 gap-4 items-center">
        <Pagination page={page} setPage={setPage} totalPages={spacex.totalPages} />

        <Sort setSort={setSort} sort={sort} />
      </div>

      {spacex?.docs?.map((elem) => {
        return <SpaceXCard key={elem.id} spaceXItem={elem} />;
      })}
    </div>
  );
}

export default App;
