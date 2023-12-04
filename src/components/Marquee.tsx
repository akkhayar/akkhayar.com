import { DM_Sans } from 'next/font/google';
import './Marquee.css';

const dm_sans = DM_Sans({ weight: "300", subsets: ['latin'] });

export default function Marquee() {
    return (
        <div className="marquee  columns-3 gap-8">
            <div>
                <span className={dm_sans.className + ' text-4xl uppercase'}>Built Upon Principle</span>
                {/* <span className='w-10 h-10  circle'></span> */}
                <span className={dm_sans.className + ' text-4xl uppercase'}>developer contribution</span>
            </div>
        </div>
    )
}