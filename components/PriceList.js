import classes from "../styles/CardPage.module.scss";

const PriceList = ({ prices } = props) => {
  const content = [];

  if (typeof prices !== "string") {
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
  }

  content.push(
    <li>
      <span className={classes["bold-text"]}>{prices}:</span>{" "}
      <span>
        <span style={{ color: "red" }}>N/A</span>
      </span>
    </li>
  );

  return content;
};

export default PriceList;
