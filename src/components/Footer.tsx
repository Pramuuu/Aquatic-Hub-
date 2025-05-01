
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-ocean-950 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-ocean-gradient flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold text-white">
                Aquatic Insights
              </span>
            </Link>
            <p className="text-ocean-100 mb-4">
              Explore, identify, and learn about aquatic species from around the world
              with our AI-powered platform.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-ocean-200 hover:text-ocean-100">Species Database</Link></li>
              <li><Link to="/" className="text-ocean-200 hover:text-ocean-100">Research Tools</Link></li>
              <li><Link to="/" className="text-ocean-200 hover:text-ocean-100">Prediction API</Link></li>
              <li><Link to="/" className="text-ocean-200 hover:text-ocean-100">Documentation</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-ocean-200 hover:text-ocean-100">About Us</Link></li>
              <li><Link to="/" className="text-ocean-200 hover:text-ocean-100">Contact</Link></li>
              <li><Link to="/" className="text-ocean-200 hover:text-ocean-100">Privacy Policy</Link></li>
              <li><Link to="/" className="text-ocean-200 hover:text-ocean-100">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-ocean-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-ocean-300">© 2025 Aquatic Insights. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-ocean-300 hover:text-ocean-100">
              Twitter
            </a>
            <a href="#" className="text-ocean-300 hover:text-ocean-100">
              LinkedIn
            </a>
            <a href="#" className="text-ocean-300 hover:text-ocean-100">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
