import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Head from "next/head";
import Card from "../../components/Card";
import Pagination from "../../components/Pagination";
import classes from "../../styles/CardsLayout.module.scss";

import pokemon from "pokemontcgsdk";
pokemon.configure({ apiKey: "c801d428-474b-415f-855f-b094a827f699" });

function SearchPage() {
  const router = useRouter();
  const [cards, setCards] = useState([]);
  const [query, setQuery] = useState(router.query.keyword);
  const [search, setSearch] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(14);

  const lastCard = currentPage * itemsPerPage;
  const firstCard = lastCard - itemsPerPage;
  const currentRecords = cards.slice(firstCard, lastCard);
  const nPages = Math.ceil(cards.length / itemsPerPage);

  const submitSearch = (e) => {
    e.preventDefault();
    setSearch(!search);
  };

  // useEffect(() => {
  //   window.localStorage.setItem("Current_Search", query);
  // }, [query]);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     console.log("useEFFECT", window.localStorage.getItem("Current_Search"));
  //     test = window.localStorage.getItem("Current_Search");
  //     if (test) {
  //       setQuery(test);
  //     }
  //   }
  // }, []);

  useEffect(() => {
    pokemon.card.all({ q: `name:*${query}*` }).then((c) => {
      setCards(c);
      setCurrentPage(1);
    });
  }, [search]);

  const currentCardArray =
    currentRecords === undefined || currentRecords.length === 0 ? (
      <h3>no search results</h3>
    ) : (
      <Card cards={currentRecords} />
    );

  return (
    <>
      <Head>
        <title>{`The Pokemon Library | Search`}</title>
      </Head>
      <div className={classes["page--container"]}>
        <form onSubmit={submitSearch}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.currentTarget.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <h3>Search Page: {query}</h3>
        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <div className={classes["cards-layout--container"]}>
          {currentCardArray}
        </div>
      </div>
    </>
  );
}

export default SearchPage;
