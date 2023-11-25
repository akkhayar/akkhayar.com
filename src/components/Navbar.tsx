import { DM_Sans } from 'next/font/google';
import Image from 'next/image';
import './Navbar.css';

const dm_sans = DM_Sans({ weight: "300", subsets: ['latin'] });

function NavbarItem(props: { text: string }) {
  return (
    <a href='#' className={dm_sans.className + ' mr-10 uppercase text-2xl hover:text-black hover:bg-white'}>{props.text}</a>
  )
}

export default function Navbar() {
  return (
    <nav className='m-10 flex justify-between items-center'>
      <Image src='/logo.png' width={80} height={80} alt='akkhayar-logo'/>
      <div className='flex items-center'>
        <NavbarItem text='About' />
        <NavbarItem text='Docs' />
        <NavbarItem text='Operations' />
        <div className={dm_sans.className + ' text-2xl uppercase spotlight-navbar-item hover:text-black hover:bg-white'}>What we are working on</div>
      </div>
    </nav>
  )
}