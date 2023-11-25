import { Fahkwang, DM_Sans } from 'next/font/google';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const fahkwang = Fahkwang({ weight: "700", subsets: ['latin'] });
const dm_sans = DM_Sans({ weight: "400", subsets: ['latin'] });


export default function Home() {
  return (
    <main>
      <Navbar />
      <section className='py-8 flex flex-col items-center'>
        <h1 className={fahkwang.className + ' text-9xl hover:text-black hover:bg-white'}>akkhayar</h1>
        <h2 className={dm_sans.className + ' mt-3 text-2xl hover:text-black hover:bg-white'}>Where potential meets reality.</h2>
      </section>
      <Footer />
    </main>
  )
}
