import React, { useState } from 'react'
import Drawer from './Drawer';

const Header:React.FC = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };

    const navLinks = [
        'First Link',
        'Second Link',
        'Third Link',
        'Fourth Link',
        'Fifth Link',
    ]

    return (
        <>
            <header className='flex justify-between px-3 py-4'>
                <div className='flex items-center gap-8'>
                    <div className='logo'>
                        <img src="/images/Logo.png" alt="logo" width={'38px'} height={'38px'} />
                    </div>
                    <div className='hidden lg:block'>
                        <ul className='flex gap-8 font-bold'>
                            <li>
                                <a href="#">Lorem.</a>
                            </li>
                            <li>
                                <a href="#">Lorem.</a>
                            </li>
                            <li>
                                <a href="#">Lorem.</a>
                            </li>
                            <li>
                                <a href="#">Lorem.</a>
                            </li>
                        </ul>    
                    </div>
                </div>
                <div className='hidden lg:flex gap-8 items-center'>
                    <a href="#" className='text-blue font-bold'>
                        Link
                    </a>
                    <button className='button bg-primary text-white'>
                        Button
                    </button>
                </div>
                <button
                    className="text-slate text-xl font-bold lg:hidden"
                    onClick={toggleDrawer}
                >
                    <img src="/icons/menu.svg" alt="" />
                </button>
            </header>
            <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} navLinks={navLinks}></Drawer>
        </>
    )
}

export default Header;