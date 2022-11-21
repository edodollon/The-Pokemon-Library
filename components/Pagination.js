// Styles
import pgStyle from "../styles/Pagination.module.scss";

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
    <div className={pgStyle["pg--container"]}>
      <button disabled={currentPage === 1} onClick={prevPage}>
        Prev
      </button>
      <p>
        Page {currentPage} / {nPages}
      </p>
      <button disabled={currentPage === nPages} onClick={nextPage}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
