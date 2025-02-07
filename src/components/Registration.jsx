import { Clock } from 'lucide-react';

export default function Registration() {
  return (
    <section id="register" className="pb-[20rem] md:pb-[13rem] lg:pb-[10rem] bg-white dark:bg-[#1A1D1F] transition-colors duration-200">
      <div className="container mx-auto px-4">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 200 20" 
            className="w-full h-4 text-[#fe661f] mb-8 dark:text-[#fe661f]"
          >
            <path d="M0,10 Q50,5 100,10 T200,10" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Register <span className="text-[#FE661F]">Now</span>
          </h2>
          
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4">
              <span className="text-gray-400 line-through text-2xl">₹500</span>
              <span className="text-4xl font-bold text-gray-900 dark:text-white">₹26</span>
              <span className="text-[#00A14B] font-semibold">Only!</span>
            </div>
            
            <div className="mt-4 flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300">
              <Clock className="h-5 w-5" />
              <span>Deadline: 5th Feb 2025</span>
            </div>
          </div>
          
          <button className="px-8 py-4 bg-[#FE661F] text-white rounded-full text-lg font-semibold hover:bg-[#FE661F]/90 transform hover:scale-105 transition-all">
           <a href="/register-for-workshop">Register Now</a> 
          </button>
          
          <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm">
            Limited seats available. Don't miss out!
          </p>
        </div>
      </div>
    </section>
  );
}