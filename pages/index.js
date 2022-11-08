import classes from "../styles/Home.module.scss";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    Router.push({
      pathname: "/Search",
      query: { keyword: `${value}` },
    });
  };

  return (
    <>
      <Head>
        <title>The Pokemon Library</title>
      </Head>
      <div className={classes.container}>
        <div className={classes["flex-container"]}>
          <h1>
            THE
            <br />
            POKEMON
            <br />
            LIBRARY
            <br />
          </h1>

          <div className={classes["container--buttons"]}>
            <form onSubmit={submitHandler}>
              <input
                type="text"
                className={classes["search--bar"]}
                name="searchItem"
                placeholder="Search for a card"
                value={value}
                onChange={(e) => setValue(e.currentTarget.value)}
                required
              />
            </form>
            <Link href="./Sets">
              <button className={classes["sets--button"]}>All sets</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
