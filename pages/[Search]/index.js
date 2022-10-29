import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Head from "next/head";
import Card from "../../components/Card";
import Pagination from "../../components/Pagination";
import Header from "../../components/Header";
import classes from "../../styles/CardsLayout.module.scss";
import searchStyle from "../../styles/Search.module.scss";

import pokemon from "pokemontcgsdk";
pokemon.configure({ apiKey: "c801d428-474b-415f-855f-b094a827f699" });

function SearchPage() {
  const router = useRouter();
  const [cards, setCards] = useState([]);
  const [query, setQuery] = useState(router.query.keyword);
  const [search, setSearch] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(14);

  const [focus, setFocus] = useState(false);

  const lastCard = currentPage * itemsPerPage;
  const firstCard = lastCard - itemsPerPage;
  const currentRecords = cards.slice(firstCard, lastCard);
  const nPages = Math.ceil(cards.length / itemsPerPage);

  const submitSearch = (e) => {
    e.preventDefault();
    setSearch(!search);
  };

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      e.target.blur();
    }
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
      <Header />
      <div className={classes["page--container"]}>
        <form onSubmit={submitSearch}>
          <div
            className={`${searchStyle.searchbar} ${
              focus && searchStyle["input-is-focused"]
            }`}
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.currentTarget.value)}
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              onKeyUp={handleEnter}
              placeholder="Search for a Card"
            />
            <button
              type="submit"
              className={focus && searchStyle["button-is-focused"]}
            >
              Search
            </button>
          </div>
        </form>
        <p>
          {cards.length} results for: '{query}'
        </p>

        <div className={classes["cards-layout--container"]}>
          {currentCardArray}
        </div>

        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
}

export default SearchPage;
