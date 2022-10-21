function Pagination({ nPages, currentPage, setCurrentPage }) {
  const nextPage = () => {
    if (currentPage !== nPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <p>{nPages}</p>
      <button disabled={currentPage === 1} onClick={prevPage}>
        Previous page
      </button>
      <button disabled={currentPage === nPages} onClick={nextPage}>
        Next Page
      </button>
      <p>Current Page: {currentPage}</p>
    </div>
  );
}

export default Pagination;
