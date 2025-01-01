import Hero from './Components/Home/Hero'
import ProblemSolved from './Components/Home/ProblemSolved'
import Riview from './Components/Home/Riview'
import Footer from './Components/shared/Footer'
import Navbar from './Components/shared/Navbar'



function App() {

  return (
    <main className='font-nunito-sans bg-hero-bg min-h-svh bg-no-repeat bg-top'>
      <Navbar/>
      <Hero/>
      <ProblemSolved/>
      <Riview/>
     <Footer/>
    </main>
  )
}

export default App