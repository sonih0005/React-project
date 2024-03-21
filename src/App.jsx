import './App.css'
import CryptoDescription from './Components/CryptoDescription'
import CryptoRate from './Components/CryptoRate'
import Footer from './Components/Footer'
import Map from './Components/Map'
import Navbar from './Components/Navbar/Navbar'
import Portfolio from './Components/Portfolio'
import SubFooter from './Components/SubFooter'

function App() {
  return (
   <>
   <Navbar />
    <CryptoDescription />
    <CryptoRate />
    <Map />
    <Portfolio />
    <Footer />
    <SubFooter />
   </>
  )
}

export default App
