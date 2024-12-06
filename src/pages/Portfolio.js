import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PortfolioList from "../components/PortfolioList";

const Portfolio = ({data}) => {
  return(
    <>
      <Header />
      <main className="content">
      <div className="container latest_portfolio">
        <div className="row list">
          <PortfolioList data={data} />
        </div>
      </div>
      </main>  
      <Footer />
    </>
  )
}
export default Portfolio;