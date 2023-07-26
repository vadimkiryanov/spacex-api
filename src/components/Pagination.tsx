interface IPagination {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}

export const Pagination: React.FC<IPagination> = ({ page, setPage, totalPages }) => {
  return (
    <div className="join ">
      <button disabled={page === 1} onClick={() => setPage((prev) => prev - 1)} className="join-item btn">
        «
      </button>
      <button className="join-item btn">Page {page}</button>
      <button disabled={totalPages === page} onClick={() => setPage((prev) => prev + 1)} className="join-item btn">
        »
      </button>
    </div>
  );
};
