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
        <button
          onClick={clickPage}
          value={currentPage}
          className={`${pgStyle["current-page"]}`}
        >
          {currentPage}
        </button>
      );
    } else if (nPages === 2) {
      return (
        <>
          <button
            onClick={clickPage}
            value={1}
            className={
              currentPage === 1
                ? pgStyle["current-page"]
                : pgStyle["pg--single-btn"]
            }
          >
            {1}
          </button>
          <button
            onClick={clickPage}
            value={nPages}
            className={
              currentPage === nPages
                ? pgStyle["current-page"]
                : pgStyle["pg--single-btn"]
            }
          >
            {nPages}
          </button>
        </>
      );
    } else if (currentPage === parseInt(nPages - 1) || currentPage === nPages) {
      return (
        <>
          <button
            onClick={clickPage}
            value={1}
            className={pgStyle["pg--single-btn"]}
          >
            {1}
          </button>
          <p>...</p>
          <button
            onClick={clickPage}
            value={Number(nPages - 1)}
            className={pgStyle["pg--single-btn"]}
          >
            {Number(nPages - 1)}
          </button>
          <button
            onClick={clickPage}
            value={nPages}
            className={pgStyle["pg--single-btn"]}
          >
            {nPages}
          </button>
        </>
      );
    } else {
      return (
        <>
          <button
            onClick={clickPage}
            value={currentPage}
            className={pgStyle["pg--single-btn"]}
          >
            {currentPage}
          </button>
          <button
            onClick={clickPage}
            value={currentPage + 1}
            className={pgStyle["pg--single-btn"]}
          >
            {currentPage + 1}
          </button>
          <p>...</p>
          <button
            onClick={clickPage}
            value={nPages}
            className={pgStyle["pg--single-btn"]}
          >
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
