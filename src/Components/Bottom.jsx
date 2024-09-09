import React from 'react';
import { Link } from 'react-router-dom';
const Bottom = () => {
  return (
    <footer className="bg-gray-800 text-white   mx-auto  ">
        <div >
            <ul className=' lg:flex  justify-center items-center gap-6'>
                <li className="mb-2 cursor-pointer hover:underline"> <a href="/">Home</a> </li>
                <li className="mb-2 cursor-pointer hover:underline"> <a href="/news"> News</a></li>
                <li className="mb-2 cursor-pointer hover:underline"> <a href="/sport">Sports</a> </li>
                <li className="mb-2 hover:underline"><a href="/culture">Culture</a></li>
                <li className="mb-2 hover:underline"><a href="/bussiness">Business</a></li>
                <li className="mb-2 hover:underline"><a href="/earth">Earth</a></li>
                <li className="mb-2 hover:underline"><a href="/travel">Travel</a></li>
                <li className="mb-2 hover:underline"><a href="/innovation">Innovation</a></li>
                <li className=' mb-2 hover:underline'><a href="https://anycityweatherupdate.netlify.app/">Weather</a></li>
            </ul>
        </div>
    <hr />
            <p className="text-sm item-end flex justify-center ">&copy; {new Date().getFullYear()} BBC. All rights reserved.</p>
      {/* </div> */}
    </footer>
  );
}

export default Bottom;
