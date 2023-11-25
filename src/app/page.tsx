import { Fahkwang } from 'next/font/google'
import { DM_Sans } from 'next/font/google'


const fahkwang = Fahkwang({ weight: "200", subsets: ['latin'] });

const dm_sans = DM_Sans({ weight: "200", subsets: ['latin'] });

function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <div className="flex items-center">
        <a href="#" className="mr-4">ABOUT</a>
        <a href="#" className="mr-4">DOCS</a>
        <a href="#">OPERATIONS</a>
      </div>
    </nav>
  )
}


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <h1 className={fahkwang.className}>akkhayar</h1>
      <h2 className={dm_sans.className}>Where potential meets reality.</h2>
    </main>
  )
}
