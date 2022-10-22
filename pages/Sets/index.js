import { useState, useEffect } from "react";
import Head from "next/head";
import SetCard from "../../components/SetCard";
import Header from "../../components/Header";
import classes from "../../styles/SetsPage.module.scss";
import pokemon from "pokemontcgsdk";
pokemon.configure({ apiKey: "c801d428-474b-415f-855f-b094a827f699" });

function SetsPage(props) {
  const [setsData, setSetsData] = useState([]);

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
        <h1>All Sets</h1>
        <div className={classes["all-sets--container"]}>{individualSet}</div>
      </div>
    </>
  );
}

export default SetsPage;
