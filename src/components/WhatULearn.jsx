'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const learningTopics = [
  {
    title: "ChatGPT and 15+ AI Tools",
    description: "Master cutting-edge AI tools to transform your workflow and productivity. Explore 15+ powerful AI platforms beyond ChatGPT."
  },
  {
    title: "Data Analysis with ChatGPT",
    description: "Learn advanced data interpretation techniques using ChatGPT. Discover how to extract insights, create visualizations, and make data-driven decisions."
  },
  {
    title: "Content Creation with AI",
    description: "Unlock AI-powered content generation strategies. Create engaging blog posts, social media content, and marketing materials efficiently."
  },
  {
    title: "AI-powered PowerPoint",
    description: "Design stunning, professional presentations using AI tools. Learn design tips, content generation, and presentation enhancement techniques."
  },
  {
    title: "Speed Up Job Hunting",
    description: "Leverage AI to optimize your resume, craft compelling cover letters, and enhance your professional profile for better career opportunities."
  },
  {
    title: "Elevate Reading Abilities",
    description: "Discover AI tools that can summarize, translate, and enhance your reading comprehension. Boost learning and information processing speed."
  },
  {
    title: "Build Personal Brand",
    description: "Use AI to craft a distinctive personal brand, create engaging content, and establish a strong online professional presence."
  },
  {
    title: "Supercharge Email Skills",
    description: "Learn AI techniques to write more effective emails, automate responses, and improve communication efficiency."
  },
  {
    title: "AI Audio-Video Wonders",
    description: "Explore cutting-edge AI tools for audio transcription, video editing, and multimedia content creation."
  }
];

export default function WhatULearn() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white dark:bg-[#1A1D1F]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Here's What <span className="text-[#FE661F]"> You'll Learn </span>in the 3-Hour Workshop
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningTopics.map((topic, index) => (
              <div 
                key={index} 
                className="flex flex-col"
              >
                <div 
                  onClick={() => toggleAccordion(index)}
                  className="flex justify-between items-center p-3 cursor-pointer bg-[#E6F5E6] dark:bg-gray-800 rounded-lg hover:bg-[#D0F0D0] dark:hover:bg-gray-700 transition-all duration-200"
                >
                  <h3 className="text-base md:text-lg font-semibold text-gray-800 dark:text-white pr-2">
                    {topic.title}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="text-[#FE661F] dark:text-white flex-shrink-0 h-5 w-5" />
                  ) : (
                    <ChevronDown className="text-[#FE661F] dark:text-white flex-shrink-0 h-5 w-5" />
                  )}
                </div>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index 
                      ? 'max-h-[300px] opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-3 bg-white dark:bg-gray-900 rounded-b-lg border-x border-b border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {topic.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}