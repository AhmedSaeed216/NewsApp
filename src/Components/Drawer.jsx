import React from 'react';

const Drawer = ({ isOpen, toggleDrawer }) => {
    return (
        <div
            className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300 ease-in-out`}
        >
            <button onClick={toggleDrawer} className="p-4">
                ❌
            </button>
            <ul className="p-4 m-3 text-xl  ">
                <li className="mb-2"><a href="/">Home</a></li>


                <li>
                    <details>
                        <summary><a href="/news"> News</a></summary>
                        <ul className="bg-base-100 rounded-t-none p-2">
                            <li onClick={() => newsByCountry('il')} className='text-xs cursor-pointer hover:underline px-3 font-light'>Gaza War</li>
                            <li onClick={() => newsByCountry('us')} className='text-xs cursor-pointer hover:underline px-3 font-light'>US</li>
                            <li onClick={() => newsByCountry('gb')} className='text-xs cursor-pointer hover:underline px-3 font-light'>UK</li>
                            <li onClick={() => newsByCountry('ng')} className='text-xs cursor-pointer hover:underline px-3 font-light'>Africa (Nigeria)</li>
                            <li onClick={() => newsByCountry('cn')} className='text-xs cursor-pointer hover:underline px-3 font-light'>Asia (China)</li>
                            <li onClick={() => newsByCountry('de')} className='text-xs cursor-pointer hover:underline px-3 font-light'>Europe (Germany)</li>
                            <li onClick={() => newsByCountry('ae')} className='text-xs cursor-pointer hover:underline px-3 font-light'>Middle East (UAE)</li>
                        </ul>
                    </details>
                </li>


                <li>
                    <details>
                        <summary> <a href="/sport"> Sports</a></summary>
                        <ul className="bg-base-100 rounded-t-none p-2">
                            <li className='text-xs cursor-pointer hover:underline px-3 font-light'><a href="/sport"> Home</a></li>
                            <li className='text-xs cursor-pointer hover:underline px-3 font-light'>Football</li>
                            <li className='text-xs cursor-pointer hover:underline px-3 font-light'>Cricket</li>
                            <li className='text-xs cursor-pointer hover:underline px-3 font-light'>Formula 1</li>
                            <li className='text-xs cursor-pointer hover:underline px-3 font-light'>Rugby</li>
                            <li className='text-xs cursor-pointer hover:underline px-3 font-light'>Paralympics</li>
                            <li className='text-xs cursor-pointer hover:underline px-3 font-light'>Golf</li>
                            <li className='text-xs cursor-pointer hover:underline px-3 font-light'>Tennis</li>
                        </ul>
                    </details>
                </li>

                <li className="mb-2"><a href="/culture">Culture</a></li>
                <li className="mb-2"><a href="/bussiness">Bussiness</a></li>
                <li className="mb-2"><a href="/earth">Earth</a></li>
                <li className="mb-2"><a href="/travel">Travel</a></li>
                <li className="mb-2"><a href="/innovation">Innovation</a></li>
                <li><a href="https://anycityweatherupdate.netlify.app/">Weather</a></li>
            </ul>
        </div>
    );
};

export default Drawer;
