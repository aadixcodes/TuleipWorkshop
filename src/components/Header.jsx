'use client';

import React from 'react';
import { Brain, Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Benefits', href: '#benefits' },
  { name: 'AI Tools', href: '#tools' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Mentor', href: '#mentor' },
  { name: 'Register Now', href: '#register' },
];

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-[#1A1D1F]/80 backdrop-blur-lg z-50 transition-colors duration-200">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-[#FE661F]" />
            <span className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">BharatAI</span>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              )}
            </button>
            <a
              href="#register"
              className="px-6 py-2 bg-[#FE661F] text-white rounded-full hover:bg-[#FE661F]/90 transition-colors"
            >
              Join Now
            </a>
          </div>
          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-gray-900 dark:text-white" />
              ) : (
                <Menu className="h-6 w-6 text-gray-900 dark:text-white" />
              )}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        <div
          className={`md:hidden mt-4 space-y-4 transition-all duration-300 transform ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-center text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex justify-center mt-4">
            <a
              href="#register"
              className="px-6 py-2 bg-[#FE661F] text-white rounded-full hover:bg-[#FE661F]/90 transition-colors"
            >
              Join Now
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}