import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PortfolioList from "../components/PortfolioList";
import { Link } from "react-router-dom";

const Home = ({data}) => {
  return(
    <>
      <Header />
      <main className="content">
        <div className="container latest_portfolio">
          <div className="row intro">
            <div className="col-md-4">
              <div className="contents shadow">
                <h2 className="heading2">I'm alikerock</h2>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contents shadow">
                <h2 className="heading2">I create super awesome stuff</h2>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contents shadow">
                <h2 className="heading2">I'm available for freelance projects</h2>
              </div>
            </div>
          </div>
          <div className="row list">
            <PortfolioList data={data} />
          </div>
          <p className="porfolio_readmore">
            <Link to={'/portfolio'} className="primary-btn">See my full portfolio</Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
export default Home;