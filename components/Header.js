import { useState } from "react";

// Components
import Menu from "./Menu";

// Styles
import classes from "../styles/Header.module.scss";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  function activateMenu() {
    setOpenMenu(!openMenu);
  }

  return (
    <>
      <header className={classes["header-container"]}>
        <h1 style={openMenu ? { position: "fixed" } : { position: "static" }}>
          TPL
        </h1>
        <div
          className={classes["menu--btn"]}
          onClick={activateMenu}
          /*style={openMenu ? { position: "fixed" } : { position: "static" }}*/
        ></div>
      </header>
      <Menu openMenu={openMenu} />
    </>
  );
};

export default Header;
