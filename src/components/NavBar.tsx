
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="bg-white shadow dark:bg-gray-900 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-ocean-gradient flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <span className="text-xl font-bold text-ocean-800 dark:text-ocean-300 hidden sm:inline-block">
            Aquatic Insights
          </span>
        </Link>
        
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search species..."
              className="w-64 px-4 py-2 pl-10 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-ocean-500 dark:bg-gray-800 dark:border-gray-700"
            />
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
          </div>
          
          <Button variant="outline" className="hidden sm:flex">
            Species
          </Button>
          
          <Button className="bg-ocean-gradient">
            Sign In
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
