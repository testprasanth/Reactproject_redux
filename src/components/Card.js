import React from "react";

const Card = ({ title, amount, change = "" }) => {
  const changeClass =
    change && typeof change === "string" && change.startsWith("-")
      ? "negative"
      : "positive";

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{amount}</p>
      {change && <span className={changeClass}>{change} vs. last year</span>}
    </div>
  );
};

export default Card;
