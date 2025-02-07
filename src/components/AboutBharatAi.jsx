import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutBharatAi() {
  return (
    <section className="py-16 bg-white dark:bg-[#1A1D1F]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            About
          </h2>

          {/* Logo Section */}
          <div className="relative w-full max-w-md mx-auto mb-10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FE661F]/20 to-transparent rounded-3xl transform rotate-3"></div>
            <img
              src="https://bharataipragati.com/storage/optionbuilder/uploads/690601-18-2025_0524pmBharatLogo%20(2)%20copy.png"
              alt="Bharat AI Logo"
              className="relative w-48 md:w-64 mx-auto transform transition-transform duration-300 hover:scale-105"
            />
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#E6F5E6] dark:bg-gray-800 rounded-full opacity-50 animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#FE661F]/20 rounded-full opacity-50 animate-float-delay"></div>
          </div>

          {/* Main Content */}
          <div className="max-w-3xl mx-auto mb-10">
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
              Bharat AI is India's premier AI education platform, dedicated to empowering individuals with cutting-edge artificial intelligence skills. Our mission is to make AI education accessible, practical, and industry-relevant for everyone.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="bg-[#E6F5E6] dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300 mb-2">
                  <div className="h-2 w-2 rounded-full bg-[#FE661F]"></div>
                  <p className="font-semibold">Expert-led Training</p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn from industry experts and practitioners</p>
              </div>
              <div className="bg-[#E6F5E6] dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300 mb-2">
                  <div className="h-2 w-2 rounded-full bg-[#FE661F]"></div>
                  <p className="font-semibold">Hands-on Learning</p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Practice with real-world projects</p>
              </div>
              <div className="bg-[#E6F5E6] dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300 mb-2">
                  <div className="h-2 w-2 rounded-full bg-[#FE661F]"></div>
                  <p className="font-semibold">Industry Curriculum</p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Updated with latest AI trends</p>
              </div>
              <div className="bg-[#E6F5E6] dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300 mb-2">
                  <div className="h-2 w-2 rounded-full bg-[#FE661F]"></div>
                  <p className="font-semibold">AI Community</p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Join a network of AI enthusiasts</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://bharataipragati.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-[#FE661F] text-white font-semibold rounded-lg hover:bg-[#FF5500] transition-all duration-300 group hover:scale-105"
              >
                Visit Website
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="https://tuleip.com/contact-us/"
                className="inline-flex items-center px-8 py-3 border-2 border-[#FE661F] text-[#FE661F] font-semibold rounded-lg hover:bg-[#FE661F] hover:text-white transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-[#E6F5E6] dark:bg-gray-800 rounded-xl">
              <h3 className="text-3xl font-bold text-[#FE661F] mb-1">10K+</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Students</p>
            </div>
            <div className="p-4 bg-[#E6F5E6] dark:bg-gray-800 rounded-xl">
              <h3 className="text-3xl font-bold text-[#FE661F] mb-1">50+</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Mentors</p>
            </div>
            <div className="p-4 bg-[#E6F5E6] dark:bg-gray-800 rounded-xl">
              <h3 className="text-3xl font-bold text-[#FE661F] mb-1">100+</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Sessions</p>
            </div>
            <div className="p-4 bg-[#E6F5E6] dark:bg-gray-800 rounded-xl">
              <h3 className="text-3xl font-bold text-[#FE661F] mb-1">95%</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Success</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
