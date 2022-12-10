import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Head from "next/head";

// Components
import SearchBar from "../../components/SearchBar";
import Card from "../../components/Card";
import Pagination from "../../components/Pagination";
import Header from "../../components/Header";

// Styles
import classes from "../../styles/CardsLayout.module.scss";

import pokemon from "pokemontcgsdk";
pokemon.configure({ apiKey: "c801d428-474b-415f-855f-b094a827f699" });

function SearchPage() {
  const router = useRouter();
  const [cards, setCards] = useState([]);
  const [query, setQuery] = useState(router.query.keyword);
  const [currentQuery, setCurrentQuery] = useState(router.query.keyword);
  const [search, setSearch] = useState(false);

  // For pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(24);
  const lastCard = currentPage * itemsPerPage;
  const firstCard = lastCard - itemsPerPage;
  const currentRecords = cards.slice(firstCard, lastCard);
  const nPages = Math.ceil(cards.length / itemsPerPage);

  function submitSearch(e) {
    e.preventDefault();
    setCurrentQuery(query);
    setSearch(!search);
  }

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
  }, [search, query]);

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
      <Header />
      <div className={classes["page--container"]}>
        <SearchBar
          submitSearch={submitSearch}
          query={query}
          setQuery={setQuery}
        />

        {cards.length ? (
          <p style={{ fontSize: "0.875rem" }}>
            {cards.length} results for{" "}
            <span style={{ fontWeight: 700 }}>"{currentQuery}"</span>
          </p>
        ) : (
          <p style={{ fontSize: "0.875rem" }}>No results</p>
        )}

        <div className={classes["cards-layout--container"]}>
          {currentCardArray}
        </div>

        {cards.length > 0 && (
          <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </>
  );
}

export default SearchPage;
