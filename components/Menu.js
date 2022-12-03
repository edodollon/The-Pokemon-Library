import Link from "next/link";

// Styles
import classes from "../styles/MenuOverlay.module.scss";

function Menu({ openMenu }) {
  return (
    <div
      className={`${classes[`${openMenu ? "active" : "hidden"}`]} ${
        classes["menu--container"]
      }`}
    >
      <div className={classes["nav--container"]}>
        <nav>
          <ul>
            <Link href="/Sets">
              <li>
                <span>01</span> Sets
              </li>
            </Link>
            <Link href="/Search">
              <li>
                <span>02</span> Search
              </li>
            </Link>
            <Link href="/">
              <li>
                <span>03</span> About
              </li>
            </Link>
          </ul>
        </nav>
      </div>

      <div className={classes["secondary-nav--container"]}>
        <p className={classes["blurb"]}>
          This space is currently being built. For now if you would like to work
          together or for any inquiries about the project connect with me below!
        </p>
        <p className={classes["contact--button"]}>Contact</p>
      </div>
    </div>
  );
}

export default Menu;
