import React, { useState } from 'react';
import './HandbookContent.css'


export default function HandbookContent() {

    const [selectedMenu, setSelectedMenu] = useState('home');

    // Content to display based on menu selection
    const getContent = () => {
        switch (selectedMenu) {
            case 'frontend':
                return (
                    <div className='grid grid-cols-12 gap-14 handbook-height'>
                        <div className='col-span-1 border'>
                        </div>
                        <div className='col-span-5 border rounded-xl border-col overflow-hidden'>
                            <div className='grid grid-rows-12'>
                                <div className='row-span-1 border-b border-col'>
                                    <p className='handbook-heading'>CREATE A DOCUMENT</p>
                                </div>
                                <div className='row-span-7 border-b border-col'>
                                    content
                                </div>
                                <div className='row-span-4 borders p-[1rem]'>
                                    <div className='grid grid-rows-12'>
                                        <div className='row-span-4'>
                                            <p className='handbook-content'>Documents are groups of pages connected through lorem ipsum ...</p>
                                        </div>
                                        <div className='row-span-4 pt-2'>
                                            <p className='handbook-author'>Pyae Sone Myo</p>
                                        </div>
                                        <div className='row-span-4 pt-5'>
                                            <div className='grid grid-cols-6'>
                                                <div className='col-span-5'>
                                                    <p className='handbook-duration'> <u>5 mins</u> </p>
                                                </div>
                                                <div className='col-span-1'>
                                                    &arrow&
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-5 border rounded-xl border-col'>
                            <div className='grid grid-rows-12'>
                                <div className='row-span-1 border-b border-col'>
                                    <p className='handbook-heading'>CREATE A DOCUMENT</p>
                                </div>
                                <div className='row-span-7 border-b border-col'>
                                    content
                                </div>
                                <div className='row-span-4 borders p-[1rem]'>
                                    <div className='grid grid-rows-12'>
                                        <div className='row-span-4'>
                                            <p className='handbook-content'>Documents are groups of pages connected through lorem ipsum ...</p>
                                        </div>
                                        <div className='row-span-4 pt-2'>
                                            <p className='handbook-author'>Pyae Sone Myo</p>
                                        </div>
                                        <div className='row-span-4 pt-5'>
                                            <div className='grid grid-cols-6'>
                                                <div className='col-span-5'>
                                                    <p className='handbook-duration'> <u>5 mins</u> </p>
                                                </div>
                                                <div className='col-span-1'>
                                                    &arrow&
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-1 border'></div>
                    </div>
                );
            case 'backend':
                return <div>Backend Content</div>;
            case 'design':
                return <div>Design Content</div>;
            case 'tools':
                return <div>Tools Content</div>;
            default:
                return 'frontend';
        }
    };

    return (
        <div>
            <div className='section-top grid grid-cols-12 gap-12'>
                {/* Menu */}
                <div className='col-span-3'>
                    <div className='border border-color grid grid-rows-12 rounded-xl'>
                        <div className='border-b border-color grid grid-cols-12 row-span-2 hover-invert handbook-menu py-4'>
                            <div className='col-span-10 menu-content'>
                                <ul>
                                    <li onClick={() => setSelectedMenu('frontend')}>Frontend</li>
                                </ul>
                            </div>
                            <div className='col-span-2'>
                                <img src="handbook_select.svg" alt="" />
                            </div>
                        </div>
                        <div className='border-b border-color grid grid-cols-12 row-span-2 hover-invert handbook-menu py-4'>
                            <div className='col-span-10 menu-content'>
                                <ul>
                                    <li onClick={() => setSelectedMenu('backend')}>Backend</li>
                                </ul>
                            </div>
                            <div className='col-span-2'>
                                <img src="handbook_select.svg" alt="" />
                            </div>
                        </div>
                        <div className='border-b border-color grid grid-cols-12 row-span-2 hover-invert handbook-menu py-4'>
                            <div className='col-span-10 menu-content'>
                                <ul>
                                    <li onClick={() => setSelectedMenu('design')}>Design</li>
                                </ul>
                            </div>
                            <div className='col-span-2'>
                                <img src="handbook_select.svg" alt="" />
                            </div>
                        </div>
                        <div className='border-b border-color grid grid-cols-12 row-span-2 hover-invert handbook-menu py-4'>
                            <div className='col-span-10 menu-content'>
                                <ul>
                                    <li onClick={() => setSelectedMenu('tools')}>Tools</li>
                                </ul>
                            </div>
                            <div className='col-span-2'>
                                <img src="handbook_select.svg" alt="" />
                            </div>
                        </div>
                        <div className='row-span-4 pt-14'>
                            <span className='ps-3'>
                                <a href="">Go to handbook</a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='col-span-9'>
                    {/* Display content based on selected menu */}
                    {getContent()}
                </div>
            </div>
        </div>
    );
}