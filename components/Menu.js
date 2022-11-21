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
            <li>
              <span>01</span> Sets
            </li>
            <li>
              <span>02</span> Search
            </li>
            <li>
              <span>03</span> About
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
