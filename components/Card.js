import Link from "next/link";
import Image from "next/image";
import classes from "../styles/CardsLayout.module.scss";

function Card({ cards }) {
  const singleCard = cards.map((cardDetail) => {
    return (
      <div key={cardDetail.id} className={classes["card--container"]}>
        {/* <p>{cardDetail.name}</p> */}
        <div key={cardDetail.id}>
          <Link
            href={{
              pathname: `/Sets/${cardDetail.set.id}/[slug]`,
              query: { slug: `${cardDetail.id}` },
            }}
            passHref
          >
            <Image
              src={cardDetail.images.small}
              alt={`Card image for ${cardDetail.name}`}
              layout="fill"
              objectFit="contain"
              priority={
                cardDetail.images.small ===
                `https://images.pokemontcg.io/${cardDetail.set.id}/1.png`
              }
            />
          </Link>
        </div>
      </div>
    );
  });

  return <>{singleCard}</>;
}

export default Card;
