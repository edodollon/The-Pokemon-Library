import { useState } from "react";

// Styles
import pgStyle from "../styles/Pagination.module.scss";

function Pagination({ nPages, currentPage, setCurrentPage }) {
  const clickedPage = (e) => {
    const pNum = Number(e.target.value);
    if (currentPage !== pNum) {
      setCurrentPage(pNum);
    }
  };

  const numArray = [];
  for (let i = 1; i <= nPages; i++) {
    numArray.push(i);
  }

  const pageButtons = numArray.map((x) => (
    <li
      key={x}
      value={x}
      onClick={clickedPage}
      className={
        x === currentPage ? pgStyle["current-page"] : pgStyle["pg--single-btn"]
      }
    >
      {x}
    </li>
  ));

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
      <ul className={pgStyle["pg--buttons"]}>{pageButtons}</ul>
      <button disabled={currentPage === nPages} onClick={nextPage}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
