import Head from "next/head";
import Card from "../../../components/Card";
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
  return (
    <>
      <Head>
        <title>{`The Pokemon Library | ${cards[0].set.name}`}</title>
      </Head>
      <div className={classes["page--container"]}>
        <h1 className={classes["set-name"]}>
          {cards[0].set.name} <span>- {cards[0].set.releaseDate}</span>
        </h1>
        <div className={classes["cards-layout--container"]}>
          <Card cards={cards} />
        </div>
      </div>
    </>
  );
};

export default SingleSetPage;
