"use client";

import { Fahkwang, DM_Sans } from 'next/font/google';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Marquee from '@/components/Marquee';
import About from '@/components/About';

import { ReactLenis } from '@studio-freight/react-lenis'
import Handbook from '@/components/Handbook';
import HandbookContent from '@/components/HandbookContent';

const fahkwang = Fahkwang({ weight: "700", subsets: ['latin'] });
const dm_sans = DM_Sans({ weight: "400", subsets: ['latin'] });


export default function Home() {
  return (
    <ReactLenis root>
      <main className='mx-12'>
        <Navbar />
        {/* <section className='static py-8 flex flex-col items-center' style={{marginBottom: '200px'}}>
          <div className='absolute left-80 w-60 h-60 rounded-full bg-white '></div>
          <h1 className={fahkwang.className + ' text-9xl title akkhayar-main'}>akkhayar</h1>
          <h2 className={dm_sans.className + ' mt-3 text-2xl'}>Where potential meets reality.</h2>
        </section> */}
        {/* <div className={dm_sans.className + ' primary-btn'}>Description</div>
        <div className='elongated'></div> */}
        <div className='flex justify-center'>
        <About />
        </div>
        <Handbook />
        <HandbookContent/>
        <Footer />
      </main>
    </ReactLenis>
  )
}
