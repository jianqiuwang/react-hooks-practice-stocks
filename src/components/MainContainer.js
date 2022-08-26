import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";
import Stock from "./Stock";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [portfolios, setPortfolios] = useState([])
  const [sort, setSort]=useState(null)
  const [filter, setFilter]=useState("")
  useEffect(()=>{
    fetch("http://localhost:3001/stocks")
    .then(resp=>resp.json())
    .then((stocks)=>setStocks(stocks))
  },[])

  const sortStocks= stocks.sort((a, b) => {
    if(sort==="Alphabetically") {
      return a.ticker.localeCompare(b.ticker)
    }else if(sort==="Price"){
      return a.price-b.price
    }
    })

  function addPortfolio(stock){
    setPortfolios([...portfolios,stock])
  }

  function removePortfolio(stock){
    setPortfolios(portfolios.filter((portfolio)=>portfolio.id!==stock.id))
  }

  function handlefilter(e){
    setFilter(e.target.value)
  }

  const showFilteredStocks = sortStocks.filter((stock)=>{
    if(filter==="") return true
    return stock.type === filter
  })
  console.log(showFilteredStocks)
  return (
    <div>
      <SearchBar sort={sort} setSort={setSort} handlefilter={handlefilter}/>
      <div className="row">
        <div className="col-8">
          <StockContainer sortStocks={sortStocks} addPortfolio={addPortfolio} showFilteredStocks={showFilteredStocks}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolios={portfolios} removePortfolio={removePortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
