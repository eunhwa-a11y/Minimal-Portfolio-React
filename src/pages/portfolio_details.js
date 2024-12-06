import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PortfolioSingle from "../components/PortfolioSingle";

const Details = ({data}) => {
  return(
    <>
      <Header />
      <PortfolioSingle data={data} />
      <Footer />
    </>
  )
}
export default Details;