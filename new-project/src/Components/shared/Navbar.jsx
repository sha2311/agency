import React, {  useState } from 'react'
import Logo from './Logo'
import { Container } from '../Common/Container'
import Button from '../Common/Button'
import{ NewItem} from '../Common/NewItem'
import { MobileMenu } from './MobileMenu'

const Navbar = () => {
  const[ isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  

  return (
    <nav className='py-5 '>
      
      <Container className='px-1.5 sm:px-5 xl:px-[26px]'>
             <div className='flex justify-between items-center gap-2.5 px-2 sm:px-5 xl:px-[30px] py-2 sm:py-3.5 xl:py-5 bg-white rounded-full pl-2.5 '>
                <Logo />
                <div className='hidden  lg:flex justify-center items-center gap-4'>
                 <NewItem/>
                </div>
             <div className='flex justify-center items-center gap-4'>
                <Button>Get Started</Button>
                <button onClick={toggleMenu}
                 className='lg:hidden block pr-1.5'>
                  <div className='space-y-1'>
                    <span className='block w-6 h-0.5 bg-black'></span>
                    <span className='block w-[20px] ms-1 h-0.5 bg-black'></span>
                    <span className='block w-[18px] ms-1.5 h-0.5 bg-black'></span>
                  </div>
                </button>

             </div>
           </div>
           { isMenuOpen && <MobileMenu toggleMenu={toggleMenu} />}
      </Container>
     
    </nav>
  )
}

export default Navbar
