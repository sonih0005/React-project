const Footer = () => {
  return (
    <>
        <footer>
            <div className="footer-left">
                <div className="footer-logo">
                    <img src="./images/logo.png" alt="logo" />
                </div>
                <div className="footer-txt">
                    <p>CoinIntention's mission is to make investing in cryptocurrencies easy and efficient. CoinIntention tracks various data of cryptocurrencies and thus offers its users an overview of all cryptocurrencies available on the market and their performance, market capitalization, trading volume, etc.</p>
                </div>
            </div>

            <div className="footer-right">
                <div className="company footer-links">
                    <h5>Company</h5>
                   
                    <p><a href="#">About us</a></p>
                    <p><a href="#">Term of use</a></p>
                    <p><a href="#">Privacy policy</a></p>
                    <p><a href="#">Community Rules</a></p>
                    <p><a href="#">Disclaimer</a></p>
                   <p> <a href="#">Methodolody</a></p>
                </div>

                <div className="support footer-links">
                    <h5>Support</h5>
                    <p><a href="#">Requested Form</a></p>
                    <p><a href="#">Contact Support</a></p>
                    <p><a href="#">FAQ's</a></p>
                    <p><a href="#">Glossary</a></p>
                </div>

                <div className="socials footer-links">
                    <h5>Socials</h5>
                   <p> <a href="#">Facebook</a></p>
                    <p><a href="#">Instagram</a></p>
                    <p><a href="#">Twitter</a></p>
                    <p><a href="#">Youtube</a></p>
                    <p><a href="#">Telegram</a></p>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer