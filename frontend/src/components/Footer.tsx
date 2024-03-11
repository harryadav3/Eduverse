import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

import logo from '../assets/logo.png';


const Footer = () => {
  return (
    <footer className="bg-primary text-white py-14">
        <div className="max-w-7xl mx-8 px-8 sm:px-6 lg:px-6 grid grid-cols-1 lg:grid-cols-3 gap-7 ">
            <div className=''>
                <img className="h-10 w-64" src={logo} alt=""/>

               <p className='mt-4  w-72 text-gray-300 ' >
                Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
               </p>
                {/* Add additional company links */}
            </div>

            <div className='flex gap-28 lg:flex-row flex-col'>            <div className='flex-col text-gray-300 '>
                <h2 className="text-lg mb-4 font-bold 4">Quick Links</h2>
                <a href="#" className="block mb-2">Career</a>
                <a href="#" className="block mb-2">About Us</a>
                <a href="#" className="block  mb-2">Privacy Policy</a>
            </div>
            <div className='text-gray-300'>
                <h2 className="text-lg font-bold mb-4">Blog</h2>
                <a href="#" className="block mb-2">Career</a>
                <a href="#" className="block mb-2">About Us</a>
                <a href="#" className="block  mb-2">Privacy Policy</a>

                {/* Add additional blog links */}
            </div>
            </div>

            <div className='lg:ml-14 text-gray-300'>
                <div className='flex flex-col gap-1 mb-4'>

                <h2 className="text-lg font-bold mb-2">Contact</h2>
                <p className="">Mobile: +1 234 567 890</p>
                <p className="">Location: 123 Main St, City, State</p>
                <p className="">Email: info@onlinetutor.com</p>
                </div>
                <div className="flex space-x-4">
                    <FaFacebook className='w-8 h-8' />
                    <FaTwitter className='w-8 h-8' />
                    <FaInstagram className='w-8 h-8' />
                    <FaLinkedin className='w-8 h-8' />
                    {/* Add additional social media icons */}
                </div>
            </div>
        </div>
        <div className="text-center mt-6">
            <p>© 2024 Eduverse. All rights reserved.</p>
        </div> 
    </footer>
  )
}

export default Footer