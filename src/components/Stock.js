import React from "react";

function Stock({stock, onStockClick}) {
  function handleClick(){
    // console.log("This is the stock that has been clicked", portfolios)
    // setPortfolios([...portfolios,stock])
    onStockClick(stock)
  }

  return (
    <div>
      <div className="card">
        <div className="card-body" onClick={handleClick}>
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
