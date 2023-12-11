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
                        <p className="text-center about-text text-glitch p-[1rem]">Our journey began with a vision to [Mission/Purpose]. Founded [Year],
                            our story is one of passion, dedication, and a commitment to [Values/Goals].</p>
                        <br /><br />
                        <p className="text-center about-text text-glitch p-[1rem]">What started as [Origin Story/Inspiration] has grown into a
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
                <div className='noise-bg'></div>
                <div className="border-col border-b-2 p-4 grid grid-cols-12">
                    <div className="pt-4 col-span-7">
                        <p className="binary">01100001 01101011 01101011 01101000 01100001 01111001 01100001 01110010</p>
                    </div>
                    <div className='col-span-5'>
                        <p className="label-name text-right">02 // OUR -- VALUES</p>
                    </div>
                </div>
                <div className="grid grid-cols-9">
                    <div className="border-r-2 border-col col-span-5 p-4">
                        {/* <p className="binary">01100001 01101011 01101011 01101000 01100001 01111001 01100001 01110010</p> */}
                    </div>
                    <div className="col-span-4">
                        <div className='grid grid-rows-3'>
                            <div className='border-b-2 border-col px-4 pb-4'>
                                <p className='value-title title-size text-glitch'>THE <span className='accent-red'>FOUR VALUES</span> OF akkkayar</p>
                            </div>
                            <div className='border-b-2 border-col px-4 pb-4'>
                                <p className="value-title">2. TRANSPARENCY</p>
                                <p className="text-justify about-text text-glitch p-[1rem]">
                                    Transparency is fundamental to us. At Akkhayar,
                                    we prioritize openness and honesty in everything we do. It's the   cornerstone of our values,
                                    ensuring    trust, inclusivity, and informed collaboration  at every step.
                                </p>
                            </div>
                            <div className='px-4 pb-4 pt-4 grid grid-cols-6 gap-14'>
                                <div className='col-span-5'>
                                    <img className='img-fix' src="value_visual.svg" alt="" />
                                </div>
                                <div className='col-span-1 pt-6'>
                                    <div className='grid grid-rows-2 gap-8'>
                                        <div className='row-span-1'>
                                            <img src="value_visual_2.svg" alt="" />
                                        </div>
                                        <div className='row-span-1'>
                                            <img src="value_visual_2.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
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