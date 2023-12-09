import React, { useState } from 'react';
import './HandbookContent.css'


export default function HandbookContent() {

    const [selectedMenu, setSelectedMenu] = useState('home');

    // Content to display based on menu selection
    const getContent = () => {
        switch (selectedMenu) {
            case 'frontend':
                return <div>Frontend Content</div>;
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
            <div className='grid grid-cols-12 gap-12'>
                {/* Menu */}
                <div className='col-span-3'>
                    <div className='border border-color grid grid-rows-12 rounded-xl'>
                        <div className='border-b border-color row-span-2 hover-invert handbook-menu py-4'>
                            <ul className='menu-content'>
                                <li onClick={() => setSelectedMenu('frontend')}>Frontend</li>
                            </ul>
                        </div>
                        <div className='border-b border-color row-span-2 hover-invert handbook-menu py-4'>
                            <ul className='menu-content'>
                                <li onClick={() => setSelectedMenu('backend')}>Backend</li>
                            </ul>
                        </div>
                        <div className='border-b border-color row-span-2 hover-invert handbook-menu py-4'>
                            <ul className='menu-content'>
                                <li onClick={() => setSelectedMenu('design')}>Design</li>
                            </ul>
                        </div>
                        <div className='border-b border-color row-span-2 hover-invert handbook-menu py-4'>
                            <ul className='menu-content'>
                                <li onClick={() => setSelectedMenu('tools')}>Tools</li>
                            </ul>
                        </div>
                        <div className='row-span-4 pt-14'>
                            <span className='ps-3'>
                                <a href="">Go to handbook</a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='col-span-9 border'>
                    {/* Display content based on selected menu */}
                    {getContent()}
                </div>
            </div>
        </div>
    );
}