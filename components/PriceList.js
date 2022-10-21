import classes from "../styles/CardPage.module.scss";

const PriceList = ({ prices } = props) => {
  const content = [];

  for (const type in prices) {
    content.push(
      <li key={type}>
        <span className={classes["bold-text"]}>{type}:</span>{" "}
        <span>
          <span style={{ color: "green" }}>${prices[type]["market"]}</span>
        </span>
      </li>
    );

    // -- Grabs all TCGplayer prices -- //
    // for (const rate in prices[type]) {
    //   content.push(
    //     <li
    //       key={type + rate + prices[type][rate]}
    //     >{`${rate}: $${prices[type][rate]}`}</li>
    //   );
    // }
  }

  return content;
};

export default PriceList;
