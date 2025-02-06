import { Calendar, Clock, MapPin, Timer } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white dark:from-[#1A1D1F] dark:to-[#1A1D1F] transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Learn <span className="text-[#FE661F]">25+ AI Tools</span> to Save Time & Boost Productivity
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Master the most powerful AI tools and transform your workflow. Join industry experts in this
            comprehensive workshop designed to skyrocket your productivity.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-white dark:bg-gray-800/50 shadow-lg dark:shadow-none">
              <Calendar className="h-6 w-6 text-[#FE661F]" />
              <span className="text-gray-700 dark:text-gray-300">9th Feb, Sunday</span>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-white dark:bg-gray-800/50 shadow-lg dark:shadow-none">
              <Clock className="h-6 w-6 text-[#016CB6]" />
              <span className="text-gray-700 dark:text-gray-300">3:00 PM IST</span>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-white dark:bg-gray-800/50 shadow-lg dark:shadow-none">
              <MapPin className="h-6 w-6 text-[#00A14B]" />
              <span className="text-gray-700 dark:text-gray-300">Online (Live)</span>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-white dark:bg-gray-800/50 shadow-lg dark:shadow-none">
              <Timer className="h-6 w-6 text-[#FE661F]" />
              <span className="text-gray-700 dark:text-gray-300">4 Hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}