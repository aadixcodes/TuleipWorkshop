import React from 'react';
import { Calendar, Clock, MapPin, Timer, ArrowRight } from "lucide-react";
import Link from "next/link";


const tools = [
  { name: 'Descript', logo: 'https://course.growthschool.io/images/Rectangle-143.webp' },
  { name: 'HeyGen', logo: 'https://course.growthschool.io/images/Rectangle-144.webp' },
  { name: 'Tome', logo: 'https://course.growthschool.io/images/Rectangle-145.webp' },
  { name: 'ChatGPT', logo: 'https://course.growthschool.io/images/Rectangle-147.webp' },
  { name: 'Vidyo.ai', logo: 'https://course.growthschool.io/images/Rectangle-148.webp' },
  { name: 'Opus Clip', logo: 'https://course.growthschool.io/images/Rectangle-149.webp' },
  { name: 'InVideo', logo: 'https://course.growthschool.io/images/Rectangle-150.webp' },
  { name: 'Midjourney', logo: 'https://course.growthschool.io/images/Rectangle-151.webp' },
  { name: 'D-ID', logo: 'https://course.growthschool.io/images/Rectangle-146.webp' },
  { name: 'Engage AI', logo: 'https://course.growthschool.io/images/Rectangle-152.webp' },
  { name: 'Humata', logo: 'https://course.growthschool.io/images/Rectangle-153.webp' },
  { name: 'Simplified', logo: 'https://course.growthschool.io/images/Rectangle-154.webp' },
  { name: 'Uberduck', logo: 'https://course.growthschool.io/images/Rectangle-155.webp' },
  { name: 'Feedly', logo: 'https://course.growthschool.io/images/Rectangle-156.webp' },
  { name: 'Compose AI', logo: 'https://course.growthschool.io/images/Rectangle-157.webp' },
  { name: 'Adobe', logo: 'https://course.growthschool.io/images/Rectangle-158.webp' },
  { name: 'Tree', logo: 'https://course.growthschool.io/images/Rectangle-158-1.webp' },
  { name: 'AI', logo: 'https://course.growthschool.io/images/Rectangle-159.webp' },
];

export default function LearnAITools() {
  return (
    <section className="py-12 bg-white dark:bg-[#1A1D1F] transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-10">
            Learn <span className="text-[#FE661F]">25+ AI Tools</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="flex items-center justify-center border p-2 border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow"
              >
                <img 
                  src={tool.logo} 
                  alt={tool.name} 
                  className="h-18 w-auto max-w-[70%] object-contain"
                />
              </div>
            ))}
          </div>
        </div>


        {/* CTA Section */}
        <div className="mt-12 text-center">
          <Link
            href="/register-for-workshop"
            className="inline-flex flex-col items-center justify-center w-full max-w-lg mx-auto px-6 py-2 bg-[#FE661F] text-white font-bold rounded-lg hover:bg-[#FF5500] transition-colors duration-300 group"
          >
            <div className="flex items-center">
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              <span className="text-2xl mr-3 ml-4">
                Become an Expert AI Engineer Now
              </span>
            </div>
            <div className="text-sm">
              <span className="text-lg text-white">
                {" "}
                ( Only <strike> Rs.500</strike>{" "}
                <span className="text-2xl"> Rs.26</span> ){" "}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
