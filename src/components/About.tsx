import './About.css';
import 'src/app/globals.css';

export default function About() {
    return (
        <div>
            <div className="center-div rounded-xl">
                <div className="grid grid-cols-12">
                    <div className="border-col border-r-2 border-b-2 p-4 col-span-4">
                        <div className='noise-bg'></div>
                        <p className="label-name text-center">01 // OUR -- STORY</p>
                    </div>
                    <div className="border-col border-r-2 border-b-2 p-4  col-span-7">
                    </div>
                    <div className="border-col border-b-2 p-4 col-span-1 flex justify-center items-center">
                        <img src="pixel_eye.svg" alt="" />
                    </div>
                </div>
                <div className="position-relative flex justify-center items-center rounded-lg p-6 m-10">
                    <div className="dot top-left"></div>
                    <div className="dot top-right"></div>
                    <div className="dot bottom-left"></div>
                    <div className="dot bottom-right"></div>
                    <div className='text-wrap flex-justify-center items-center'>
                        <p className="text-center about-text text-glitch">Our journey began with a vision to [Mission/Purpose]. Founded [Year],
                            our story is one of passion, dedication, and a commitment to [Values/Goals].</p>
                        <br /><br />
                        <p className="text-center about-text text-glitch">What started as [Origin Story/Inspiration] has grown into a
                            thriving community that [Achievement/Impact]. As we continue to evolve, our mission remains steadfast: [Organization's Commitment].</p>
                    </div>
                </div>
                <div className='flex justify-center items-center pb-10'>
                    <p className='about-direct text-glitch'>[ GET&nbsp;TO&nbsp;KNOW&nbsp;US&nbsp;
                        <span className='ui-btn'>
                            <a href="" className='background-cancel text-decoration-none'>
                                <span className='btn-span'>MORE</span>
                            </a>
                        </span> ]
                    </p>
                </div>
            </div>
            {/* OUR VALUES */}
            <br /><br /><br /><br />
            <div className="center-div rounded-xl">
                <div className="border-col border-b-2 p-4 col-span-4">
                    <div className='noise-bg'></div>
                    <p className="label-name text-right">02 // OUR -- VALUES</p>
                </div>
                <div className="grid grid-cols-9">
                    <div className="border-r-2 border-col col-span-5 p-4">
                        <p className="binary">01100001 01101011 01101011 01101000 01100001 01111001 01100001 01110010</p>
                    </div>
                    <div className="col-span-4">
                        <div className='grid grid-rows-4'>
                            <div className='border-b-2 border-col px-4 pb-4'>
                                <p className="value-title">MODERNIZATION</p>
                                <p className="text-justify about-text">
                                    Transparency is fundamental to us. At Akkhayar,
                                    we prioritize openness and honesty in everything we do. It's the   cornerstone of our values,
                                    ensuring    trust, inclusivity, and informed collaboration  at every step.
                                </p>
                            </div>
                            <div className='border-b-2 border-col px-4 pb-4'>
                                <p className="value-title">TRANSPARENCY</p>
                                <p className="text-justify about-text">
                                    Transparency is fundamental to us. At Akkhayar,
                                    we prioritize openness and honesty in everything we do. It's the   cornerstone of our values,
                                    ensuring    trust, inclusivity, and informed collaboration  at every step.
                                </p>
                            </div>
                            <div className='border-b-2 border-col px-4 pb-4'>
                                <p className="value-title">SOCIAL WORK</p>
                                <p className="text-justify about-text">
                                    Transparency is fundamental to us. At Akkhayar,
                                    we prioritize openness and honesty in everything we do. It's the   cornerstone of our values,
                                    ensuring    trust, inclusivity, and informed collaboration  at every step.
                                </p>
                            </div>
                            <div className='px-4 pb-4'>
                                <p className="value-title">CREATIVITY</p>
                                <p className="text-justify about-text">
                                    Transparency is fundamental to us. At Akkhayar,
                                    we prioritize openness and honesty in everything we do. It's the   cornerstone of our values,
                                    ensuring    trust, inclusivity, and informed collaboration  at every step.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center pt-24'>
                <img src="icon_visual.svg" alt="" />
            </div>
        </div>
    )
}