import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
      <footer className="bg-lightRed border-t font-inria border-black z-50 absolute w-full p-4 text-center">
        <div className="flex items-center justify-center gap-4">
          <span>Let's Connect!</span>
          <a href="https://github.com/doctordoom101" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black">
            <FaGithub className="h-5 w-5" />
          </a>
          <a href="https://instagram.com/fandadefjcr" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black">
            <FaInstagram className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/defanda-yeremia/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black">
            <FaLinkedin className="h-5 w-5" />
          </a>
        </div>
      </footer>
  )
}

export default Footer
