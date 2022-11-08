import { useState, useEffect } from "react";
import Head from "next/head";
import Router from "next/router";

// Components
import SetCard from "../../components/SetCard";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";

// Styles
import classes from "../../styles/SetsPage.module.scss";
import pokemon from "pokemontcgsdk";
pokemon.configure({ apiKey: "c801d428-474b-415f-855f-b094a827f699" });

function SetsPage(props) {
  const [setsData, setSetsData] = useState([]);
  const [query, setQuery] = useState();

  function submitSearch(e) {
    e.preventDefault();
    Router.push({
      pathname: "/Search",
      query: { keyword: `${query}` },
    });
  }

  useEffect(() => {
    pokemon.set.all().then((sets) => setSetsData(sets));
  }, []);

  const individualSet = setsData.map((set) => (
    <SetCard
      key={set.id}
      id={set.id}
      name={set.name}
      logo={set.images.logo}
      symbol={set.images.symbol}
      releaseDate={set.releaseDate}
      printedTotal={set.printedTotal}
    />
  ));

  return (
    <>
      <Head>
        <title>The Pokemon Library | Sets</title>
      </Head>
      <Header />
      <div className={classes["sets-page--container"]}>
        <SearchBar
          submitSearch={submitSearch}
          query={query}
          setQuery={setQuery}
        />
        <h1>All Sets</h1>
        <div className={classes["all-sets--container"]}>{individualSet}</div>
      </div>
    </>
  );
}

export default SetsPage;
