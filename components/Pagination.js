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

  const leftSibling = numArray[currentPage - 1];
  const rightSibling = numArray[currentPage + 1];

  const shortEnd = (
    <>
      <li
        key={nPages - 2}
        value={nPages - 2}
        onClick={clickedPage}
        className={
          nPages - 2 === currentPage
            ? pgStyle["current-page"]
            : pgStyle["pg--single-btn"]
        }
      >
        {nPages - 2}
      </li>
      <li
        key={nPages - 1}
        value={nPages - 1}
        onClick={clickedPage}
        className={
          nPages - 1 === currentPage
            ? pgStyle["current-page"]
            : pgStyle["pg--single-btn"]
        }
      >
        {nPages - 1}
      </li>
      <li
        value={nPages}
        onClick={clickedPage}
        className={
          nPages === currentPage
            ? pgStyle["current-page"]
            : pgStyle["pg--single-btn"]
        }
      >
        {nPages}
      </li>
    </>
  );

  const pageButtonsShort = (
    <>
      <li
        key={leftSibling}
        value={leftSibling}
        onClick={clickedPage}
        className={
          leftSibling === currentPage
            ? pgStyle["current-page"]
            : pgStyle["pg--single-btn"]
        }
      >
        {leftSibling}
      </li>
      <li
        key={numArray[`${currentPage}`]}
        value={numArray[`${currentPage}`]}
        onClick={clickedPage}
        className={
          numArray[`${currentPage}`] === currentPage
            ? pgStyle["current-page"]
            : pgStyle["pg--single-btn"]
        }
      >
        {numArray[`${currentPage}`]}
      </li>
      <li
        value={rightSibling}
        onClick={clickedPage}
        className={
          rightSibling === currentPage
            ? pgStyle["current-page"]
            : pgStyle["pg--single-btn"]
        }
      >
        {rightSibling}
      </li>
    </>
  );

  const pageButtonsLong = numArray.map((x) => (
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
      <button
        style={{ marginRight: "1rem" }}
        className={
          currentPage !== 1
            ? pgStyle["arrow-btn"]
            : pgStyle["arrow-btn--disabled"]
        }
        disabled={currentPage === 1}
        onClick={prevPage}
      >
        {String.fromCharCode(60)}
      </button>
      <ul className={pgStyle["pg--buttons"]}>
        {nPages > 3
          ? currentPage >= nPages - 1
            ? shortEnd
            : pageButtonsShort
          : pageButtonsLong}
      </ul>
      <button
        style={{ marginLeft: "1rem" }}
        className={
          currentPage !== nPages
            ? pgStyle["arrow-btn"]
            : pgStyle["arrow-btn--disabled"]
        }
        disabled={currentPage === nPages}
        onClick={nextPage}
      >
        {String.fromCharCode(62)}
      </button>
    </div>
  );
}

export default Pagination;
