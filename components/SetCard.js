import classes from "../styles/SetCard.module.scss";
import Link from "next/link";
import Image from "next/image";

const SetCard = (props) => {
  return (
    <Link href={`/Sets/${props.id}`}>
      <div className={classes["set-card--container"]}>
        <h2>{props.name}</h2>
        <div className={classes["logo--container"]}>
          <Image
            src={props.logo}
            alt={`Set logo for ${props.name}`}
            layout="fill"
            objectFit="contain"
            priority={
              props.logo === "https://images.pokemontcg.io/base1/logo.png" &&
              true
            }
          />
        </div>

        <div className={classes["set-info--container"]}>
          <div>
            <Image
              src={props.symbol}
              alt={`Set symbol for ${props.name}`}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p>{`Released: ${props.releaseDate}`}</p>
          <p>{`Total Cards: ${props.printedTotal}`}</p>
        </div>
      </div>
    </Link>
  );
};

export default SetCard;
