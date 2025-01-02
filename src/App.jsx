import Faq from './Components/Home/Faq'
import Hero from './Components/Home/Hero'
import Patners from './Components/Home/Patners'
import ProblemSolved from './Components/Home/ProblemSolved'
import Riview from './Components/Home/Riview'
import Footer from './Components/shared/Footer'
import Navbar from './Components/shared/Navbar'
import Simplyfy from './Simplyfy'



function App() {

  return (
    <main className='font-nunito-sans bg-hero-bg min-h-svh bg-no-repeat bg-top'>
      <Navbar/>
      <Hero/>
      <ProblemSolved/>
      <Riview/>
      <Patners/>
      <Faq/>
      <Simplyfy/>
     <Footer/>
    </main>
  )
}

export default App