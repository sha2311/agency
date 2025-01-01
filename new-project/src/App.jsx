import Hero from './Components/Home/hero'
import ProblemSolved from './Components/Home/ProblemSolved'
import Footer from './Components/shared/Footer'
import Navbar from './Components/shared/Navbar'



function App() {

  return (
    <main className='font-nunito-sans bg-[url(/hero-bg.svg)] min-h-svh bg-no-repeat bg-top  '>
      <Navbar/>
      <Hero/>
      <ProblemSolved/>
     <Footer/>
    </main>
  )
}

export default App