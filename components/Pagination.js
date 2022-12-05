// Styles
import pgStyle from "../styles/Pagination.module.scss";

function Pagination({ nPages, currentPage, setCurrentPage }) {
  const clickPage = (e) => {
    const pNum = Number(e.target.value);
    if (currentPage !== pNum) {
      setCurrentPage(pNum);
    }
  };

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

  const pageButtons = () => {
    if (nPages === 1) {
      return (
        <button onClick={clickPage} value={currentPage}>
          {currentPage}
        </button>
      );
    } else if (nPages === 2) {
      return (
        <>
          <button onClick={clickPage} value={1}>
            {1}
          </button>
          <button onClick={clickPage} value={nPages}>
            {nPages}
          </button>
        </>
      );
    } else if (currentPage === parseInt(nPages - 1) || currentPage === nPages) {
      return (
        <>
          <button onClick={clickPage} value={1}>
            {1}
          </button>
          <p>...</p>
          <button onClick={clickPage} value={Number(nPages - 1)}>
            {Number(nPages - 1)}
          </button>
          <button onClick={clickPage} value={nPages}>
            {nPages}
          </button>
        </>
      );
    } else {
      return (
        <>
          <button onClick={clickPage} value={currentPage}>
            {currentPage}
          </button>
          <button onClick={clickPage} value={currentPage + 1}>
            {currentPage + 1}
          </button>
          <p>...</p>
          <button onClick={clickPage} value={nPages}>
            {nPages}
          </button>
        </>
      );
    }
  };

  return (
    <div className={pgStyle["pg--container"]}>
      <button disabled={currentPage === 1} onClick={prevPage}>
        Prev
      </button>
      <div className={pgStyle["pg--buttons"]}>{pageButtons()}</div>

      <button disabled={currentPage === nPages} onClick={nextPage}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
