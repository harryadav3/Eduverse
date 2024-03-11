import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

import logo from '../assets/logo.png';


const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-4 gap-7">
            <div className=''>
                <img className="h-10 w-64" src={logo} alt=""/>

               <p className='mt-4  w-72  ' >
                Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
               </p>
                {/* Add additional company links */}
            </div>
            <div className='flex-col '>
                <h2 className="text-lg mb-4 font-bold 4">Quick Links</h2>
                <a href="#" className="block text-gray-300 mb-2">Career</a>
                <a href="#" className="block text-white mb-2">About Us</a>
                <a href="#" className="block text-white mb-2">Privacy Policy</a>
            </div>
            <div>
                <h2 className="text-lg font-bold mb-4">Blog</h2>
                <a href="#" className="block text-gray-300 mb-2">Career</a>
                <a href="#" className="block text-white mb-2">About Us</a>
                <a href="#" className="block text-white mb-2">Privacy Policy</a>

                {/* Add additional blog links */}
            </div>
            <div>
                <h2 className="text-lg font-bold mb-4">Contact</h2>
                <p className="mb-2">Mobile: +1 234 567 890</p>
                <p className="mb-2">Location: 123 Main St, City, State</p>
                <p className="mb-2">Email: info@onlinetutor.com</p>
                <div className="flex space-x-4">
                    <FaFacebook className='w-8 h-8' />
                    <FaTwitter className='w-8 h-8' />
                    <FaInstagram className='w-8 h-8' />
                    <FaLinkedin className='w-8 h-8' />
                    {/* Add additional social media icons */}
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer