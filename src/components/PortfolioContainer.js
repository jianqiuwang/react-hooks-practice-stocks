import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolios,removePortfolio}) {
  const showPortfolioData = portfolios.map((stock)=><Stock key={stock.id} stock={stock} onStockClick={removePortfolio}/>)
  return (
    <div >
      <h2>My Portfolio</h2>
      {
        //render your portfolio stocks here
        // {showPortfolioData}
      }
      {showPortfolioData}
    </div>
  );
}

export default PortfolioContainer;
