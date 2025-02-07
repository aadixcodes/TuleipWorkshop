'use client';

import React, { useState } from 'react';
import { LinkedinIcon, InstagramIcon, TwitterIcon } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const mentors = [
  {
    name: 'Harshit Goyal',
    position: 'Founder - Tuleip Ai Solutions',
    image: '/assets/harshitgoyal.jpg',
    description: 'Ex-Uber growth leader. Helped 100,000+ learners through LinkedIn and Growth Hacking programs.',
    linkedin: '50M+ Impressions',
    followers: {
      instagram: '80K+',
      twitter: '90K+'
    }
  },
  {
    name: 'Naman Sisodiya',
    position: 'AI Engineer - Tuleip Ai Solutions',
    image: '/assets/namansisodiya.jpg',
    description: 'Expert in AI and technology innovation with extensive industry experience.',
    linkedin: '50M+ Impressions',
    followers: {
      instagram: '50K+',
      twitter: '75K+'
    }
  }
];

export default function YourMentor() {
  const [currentMentor, setCurrentMentor] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMentorChange = (direction) => {
    setIsAnimating(true);
    setTimeout(() => {
      if (direction === 'next') {
        setCurrentMentor((prev) => (prev + 1) % mentors.length);
      } else {
        setCurrentMentor((prev) => (prev - 1 + mentors.length) % mentors.length);
      }
      setIsAnimating(false);
    }, 300);
  };

  const mentor = mentors[currentMentor];

  return (
    <section className="py-16 bg-white dark:bg-[#1A1D1F]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Meet Your <span className="text-[#FE661F]">Mentor</span>
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons - Left */}
          <button 
            onClick={() => handleMentorChange('prev')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-[#FE661F] text-white p-2.5 rounded-full hover:bg-[#FF5500] transition-all duration-300 hover:scale-110 shadow-lg disabled:opacity-50 hidden md:block"
            disabled={isAnimating}
            aria-label="Previous mentor"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div 
            className={`grid md:grid-cols-2 gap-8 items-center bg-[#E6F5E6] dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg transition-all duration-300 ${
              isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            {/* Mentor Image */}
            <div className="flex justify-center">
              <img 
                src={mentor.image} 
                alt={mentor.name} 
                className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Mentor Details */}
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {mentor.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm md:text-base">
                {mentor.position}
              </p>
              <p className="text-gray-700 dark:text-gray-400 mb-6 text-sm md:text-base">
                {mentor.description}
              </p>

              {/* Social Stats */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4">
                <div className="flex items-center space-x-2 bg-white/50 dark:bg-gray-700/50 px-3 py-1.5 rounded-full">
                  <LinkedinIcon className="text-[#0A66C2] h-4 w-4 md:h-5 md:w-5" />
                  <span className="text-sm md:text-base dark:text-white">{mentor.linkedin}</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/50 dark:bg-gray-700/50 px-3 py-1.5 rounded-full">
                  <InstagramIcon className="text-[#E1306C] h-4 w-4 md:h-5 md:w-5" />
                  <span className="text-sm md:text-base dark:text-white">{mentor.followers.instagram}</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/50 dark:bg-gray-700/50 px-3 py-1.5 rounded-full">
                  <TwitterIcon className="text-[#1DA1F2] h-4 w-4 md:h-5 md:w-5" />
                  <span className="text-sm md:text-base dark:text-white">{mentor.followers.twitter}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons - Right */}
          <button 
            onClick={() => handleMentorChange('next')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-[#FE661F] text-white p-2.5 rounded-full hover:bg-[#FF5500] transition-all duration-300 hover:scale-110 shadow-lg disabled:opacity-50 hidden md:block"
            disabled={isAnimating}
            aria-label="Next mentor"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Mobile Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-6 md:hidden">
            <button 
              onClick={() => handleMentorChange('prev')}
              className="bg-[#FE661F] text-white p-2.5 rounded-full hover:bg-[#FF5500] transition-all duration-300 hover:scale-110 shadow-lg disabled:opacity-50"
              disabled={isAnimating}
              aria-label="Previous mentor"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={() => handleMentorChange('next')}
              className="bg-[#FE661F] text-white p-2.5 rounded-full hover:bg-[#FF5500] transition-all duration-300 hover:scale-110 shadow-lg disabled:opacity-50"
              disabled={isAnimating}
              aria-label="Next mentor"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}