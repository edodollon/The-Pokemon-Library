import Head from "next/head";
import { useState } from "react";

// Components
import Card from "../../../components/Card";
import Header from "../../../components/Header";
import Pagination from "../../../components/Pagination";

// Styles
import classes from "../../../styles/CardsLayout.module.scss";

const axios = require("axios");
axios.defaults.headers["X-Api-Key"] = "c801d428-474b-415f-855f-b094a827f699";

export const getStaticPaths = async () => {
  const paths = await axios
    .get("https://api.pokemontcg.io/v2/sets")
    .then((res) =>
      res.data.data.map((set) => {
        return { params: { id: set.id } };
      })
    );

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps(context) {
  const id = context.params.id;
  const data = await axios
    .get(`https://api.pokemontcg.io/v2/cards?q=set.id:${id}`)
    .then((res) => res.data.data);

  return {
    props: { cards: data },
  };
}

const SingleSetPage = ({ cards }) => {
  // For pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(24);
  const lastCard = currentPage * itemsPerPage;
  const firstCard = lastCard - itemsPerPage;
  const currentRecords = cards.slice(firstCard, lastCard);
  const nPages = Math.ceil(cards.length / itemsPerPage);

  return (
    <>
      <Head>
        <title>{`The Pokemon Library | ${cards[0].set.name}`}</title>
      </Head>
      <Header />
      <div className={classes["page--container"]}>
        <h1 className={classes["set-name"]}>
          {cards[0].set.name} <span>- {cards[0].set.releaseDate}</span>
        </h1>
        <div className={classes["cards-layout--container"]}>
          <Card cards={currentRecords} />
        </div>

        {currentRecords.length > 0 && (
          <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </>
  );
};

export default SingleSetPage;
