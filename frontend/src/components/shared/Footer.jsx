import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20  text-black
  dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto py-12 px-4 md:px-6 grid md:grid-cols-3 gap-8">

        {/* About Section */}
        <div>
          <Link to="/" className="flex justify-between items-center">
            <img
              src={logo}
              alt="JobMitra Logo"
              className="w-50 -mt-20"
            />
          </Link>
          <p className="text-gray-900 dark:text-gray-100">
            JobMitra helps you find and apply to your dream jobs in Nepal easily. Stay updated with latest job openings and opportunities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-purple-600 transition">Home</a>
            </li>
            <li>
              <a href="/jobs" className="hover:text-purple-600 transition">Jobs</a>
            </li>
            <li>
              <a href="/browse" className="hover:text-purple-600 transition">Browse</a>
            </li>

          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h2 className="text-gray-900 dark:text-gray-100">Contact</h2>
          <p className="text-gray-900 dark:text-gray-100">Email:<a href="mailto:info@jobmitra.com"> info@jobmitra.com</a></p>
          <p className="text-gray-900 dark:text-gray-100">tel: <a href="tel:+9779812345678">+9779812345678</a></p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="w-10 h-10 bg-purple-600 text-white flex items-center justify-center rounded-full hover:bg-purple-700 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="w-10 h-10 bg-purple-600 text-white flex items-center justify-center rounded-full hover:bg-purple-700 transition">
              <FaTwitter />
            </a>
            <a href="#" className="w-10 h-10 bg-purple-600 text-white flex items-center justify-center rounded-full hover:bg-purple-700 transition">
              <FaInstagram />
            </a>
            <a href="#" className="w-10 h-10 bg-purple-600 text-white flex items-center justify-center rounded-full hover:bg-purple-700 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-10 text-center py-4 text-gray-900 dark:text-gray-100">
        &copy; {new Date().getFullYear()} JobMitra. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
