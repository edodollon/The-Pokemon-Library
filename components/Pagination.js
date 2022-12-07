import { useState } from "react";

// Styles
import pgStyle from "../styles/Pagination.module.scss";

function Pagination({ nPages, currentPage, setCurrentPage }) {
  // const [pg, setPg] = useState(1);

  // const clickPage = (e) => {
  //   const pNum = Number(e.target.value);
  //   if (currentPage !== pNum) {
  //     setPg(pNum);
  //     setCurrentPage(pNum);
  //   }
  // };

  const numArray = [];
  for (let i = 1; i <= nPages; i++) {
    numArray.push(i);
  }

  const pageButtons = numArray.map((x) => (
    <li className={pgStyle["pg--single-btn"]}>{x}</li>
  ));

  const nextPage = () => {
    if (currentPage !== nPages) {
      // setPg(currentPage + 1);
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage !== 1) {
      // setPg(currentPage - 1);
      setCurrentPage(currentPage - 1);
    }
  };

  // const pageButtons = () => {
  //   if (nPages === 1) {
  //     return (
  //       <button
  //         onClick={clickPage}
  //         value={currentPage}
  //         className={`${pgStyle["current-page"]}`}
  //       >
  //         {currentPage}
  //       </button>
  //     );
  //   } else if (nPages === 2) {
  //     return (
  //       <>
  //         <button
  //           onClick={clickPage}
  //           value={1}
  //           className={
  //             currentPage === 1
  //               ? pgStyle["current-page"]
  //               : pgStyle["pg--single-btn"]
  //           }
  //         >
  //           {1}
  //         </button>
  //         <button
  //           onClick={clickPage}
  //           value={nPages}
  //           className={
  //             this.value === pg
  //               ? pgStyle["current-page"]
  //               : pgStyle["pg--single-btn"]
  //           }
  //         >
  //           {nPages}
  //         </button>
  //       </>
  //     );
  //   } else if (currentPage === parseInt(nPages - 1) || currentPage === nPages) {
  //     return (
  //       <>
  //         <button
  //           onClick={clickPage}
  //           value={1}
  //           className={pgStyle["pg--single-btn"]}
  //         >
  //           {1}
  //         </button>
  //         <p>...</p>
  //         <button
  //           onClick={clickPage}
  //           value={Number(nPages - 1)}
  //           className={pgStyle["pg--single-btn"]}
  //         >
  //           {Number(nPages - 1)}
  //         </button>
  //         <button
  //           onClick={clickPage}
  //           value={nPages}
  //           className={pgStyle["pg--single-btn"]}
  //         >
  //           {nPages}
  //         </button>
  //       </>
  //     );
  //   } else {
  //     return (
  //       <>
  //         <button
  //           onClick={clickPage}
  //           value={currentPage}
  //           className={
  //             currentPage === pg
  //               ? pgStyle["current-page"]
  //               : pgStyle["pg--single-btn"]
  //           }
  //         >
  //           {currentPage}
  //         </button>
  //         <button
  //           onClick={clickPage}
  //           value={currentPage + 1}
  //           className={
  //             currentPage === pg
  //               ? pgStyle["current-page"]
  //               : pgStyle["pg--single-btn"]
  //           }
  //         >
  //           {currentPage + 1}
  //         </button>
  //         <p>...</p>
  //         <button
  //           onClick={clickPage}
  //           value={nPages}
  //           className={pgStyle["pg--single-btn"]}
  //         >
  //           {nPages}
  //         </button>
  //       </>
  //     );
  //   }
  // };

  return (
    <div className={pgStyle["pg--container"]}>
      <button disabled={currentPage === 1} onClick={prevPage}>
        Prev
      </button>
      {/* <div className={pgStyle["pg--buttons"]}>{pageButtons()}</div> */}
      <ul className={pgStyle["pg--buttons"]}>{pageButtons}</ul>

      <button disabled={currentPage === nPages} onClick={nextPage}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
