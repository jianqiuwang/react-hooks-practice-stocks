import React from "react";
import Stock from "./Stock";

function StockContainer({addPortfolio, showFilteredStocks}) {
  const showStocksData=showFilteredStocks.map((stock)=><Stock key={stock.id} stock={stock} onStockClick={addPortfolio}/>)
  return (
    <div>
      <h2>Stocks</h2>
      {/* render stock list here*/}
      {showStocksData}
    </div>
  );
}

export default StockContainer;
