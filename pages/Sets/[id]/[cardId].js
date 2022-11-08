import Head from "next/head";
import Image from "next/image";

// Components
import PriceList from "../../../components/PriceList";
import Header from "../../../components/Header";
import SearchBar from "../../../components/SearchBar";

// Styles
import classes from "../../../styles/CardPage.module.scss";

const axios = require("axios");
axios.defaults.headers["X-API-KEY"] = "c801d428-474b-415f-855f-b094a827f699";

export const getStaticPaths = async () => {
  const paths = await axios
    .get("https://api.pokemontcg.io/v2/cards")
    .then((res) =>
      res.data.data.map((card) => {
        return {
          params: {
            id: card.set.id,
            cardId: card.id,
          },
        };
      })
    );

  return {
    paths,
    fallback: "blocking",
  };
};

export async function getStaticProps(context) {
  const cardId = context.params.cardId;

  const data = await axios
    .get(`https://api.pokemontcg.io/v2/cards/${cardId}`)
    .then((res) => res.data.data);

  return {
    props: { card: data },
  };
}

const cardPage = ({ card }) => {
  const tcgPrices = card.tcgplayer.prices;

  return (
    <>
      <Head>
        <title>{`The Pokemon Library | ${card.set.name} | ${card.name}`}</title>
      </Head>
      <Header />
      <div className={classes["card-page--container"]}>
        <div className={classes["card-detail--header"]}>
          <h1>
            {card.name} - {card.set.name}
          </h1>
          <p>{card.set.name}</p>
        </div>

        <div className={classes["card-image--container"]}>
          <Image
            src={card.images.small}
            alt={`Image for ${card.name}`}
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div>
          <h2>Card Details</h2>
          <div className={classes["card-details--container"]}>
            <p>
              <span className={classes["bold-text"]}>
                Card Number / Rarity:
              </span>{" "}
              {card.number} / {card.rarity}
            </p>
            <p>
              <span className={classes["bold-text"]}>Flavor Text:</span>{" "}
              {card.flavorText ? card.flavorText : "N/A"}
            </p>
            <p>
              <span className={classes["bold-text"]}>Artist:</span>{" "}
              {card.artist}
            </p>
          </div>
        </div>

        <div className={classes["card-prices--container"]}>
          <h2>Current Price Points</h2>
          <p>Market Price via TCGplayer</p>
          <ul>
            <PriceList prices={tcgPrices} />
          </ul>
        </div>
      </div>
    </>
  );
};

export default cardPage;
