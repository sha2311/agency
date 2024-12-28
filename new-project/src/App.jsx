import './App.css'
import Button from './Components/Button'
import { SectionTitle } from './Components/SectionTitle'


function App() {

  return (
    <>
      <Button> Primary Button </Button>
      <Button className='bg-teal-500'> secondary Button </Button>
      <SectionTitle gradient='Alam'>Sheikh Hashibub</SectionTitle>
    </>
  )
}

export default App
