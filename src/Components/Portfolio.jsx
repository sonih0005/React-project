import PortfolioLeft from "./PortfolioLeft"
import PortfolioRight from "./PortfolioRight"

const Portfolio = () => {
  return (
    <>
        <section className="portfolioContainer">
        <PortfolioLeft />
        <PortfolioRight />
        </section>
    </>
  )
}

export default Portfolio