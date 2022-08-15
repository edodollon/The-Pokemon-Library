import classes from "../styles/Home.module.scss";
import Link from "../node_modules/next/link";

export default function Home() {
  return (
    <div className={classes.container}>
      <h1>THE<br />POKEMON<br />LIBRARY<br /></h1>

      <div className={classes["container--buttons"]}>
        <button className={classes["search--bar"]}>Search for a card</button>
        <Link href="./Sets"><button className={classes["sets--button"]}>All sets</button></Link>
      </div>
    </div>
  );
}
