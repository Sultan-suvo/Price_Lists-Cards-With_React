import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Contact', path: '/contact' },
        { id: 4, name: 'Blog', path: '/blog' },
        { id: 5, name: 'Portfolio', path: '/portfolio' },
    ];
    return (
        <nav className='bg-purple-400 px-4'>
            <div className='md:hidden'>
                <span>
                    {open === true ?
                        <XMarkIcon onClick={() => setOpen(!open)} className="h-6 w-6 text-purple-500" /> : <Bars3Icon onClick={() => setOpen(!open)} className="h-6 w-6 text-purple-500" />}
                </span>
            </div>

            <ul className={`md:flex bg-purple-400 pl-8 pb-4 py-2 absolute md:static duration-500 ${open ? 'top-6' : '-top-36'}`}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}

                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;