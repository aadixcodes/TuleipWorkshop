// 'use client';

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';

// export default function StickyFooter() {
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0
//   });

//   useEffect(() => {
//     const targetDate = new Date('2025-02-09T23:59:59+05:30').getTime();

//     const timer = setInterval(() => {
//       const now = new Date().getTime();
//       const difference = targetDate - now;

//       if (difference > 0) {
//         const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((difference % (1000 * 60)) / 1000);

//         setTimeLeft({ days, hours, minutes, seconds });
//       } else {
//         clearInterval(timer);
//         setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//       }
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="fixed bottom-0 left-0 right-0 z-50 bg-transparent px-4 py-4">
//       <div className="max-w-5xl mx-auto bg-[#fe661f]/70 dark:bg-[#fe661f]/10 backdrop-blur-md rounded-full shadow-lg border border-[#FE661F]/20">
//         <div className="flex items-center justify-between p-3 md:p-4">
//           <div className="flex items-center space-x-6">
//             <div className="bg-[#E6F5E6] px-5 py-3 rounded-full">
//               <span className="text-[#FE661F] font-bold text-lg md:text-xl">
//                 ₹199 
//                 <span className="line-through text-gray-500 ml-3 text-base md:text-lg">₹1,999</span>
//               </span>
//             </div>
//             <div className="hidden md:flex items-center space-x-3">
//               <p className="text-black text-base  dark:text-white md:text-lg font-medium">
//                 Deadline 9 Feb, 2025
//               </p>
//               <div className="flex items-center space-x-2 text-[#FE661F] font-semibold">
//                 <span className="bg-white px-2 py-1 rounded-md text-base">
//                   {timeLeft.days}d
//                 </span>
//                 <span className="bg-white px-2 py-1 rounded-md text-base">
//                   {timeLeft.hours}h
//                 </span>
//                 <span className="bg-white px-2 py-1 rounded-md text-base">
//                   {timeLeft.minutes}m
//                 </span>
//                 <span className="bg-white px-2 py-1 rounded-md text-base">
//                   {timeLeft.seconds}s
//                 </span>
//               </div>
//             </div>
//           </div>
//           <Link 
//             href="/register"
//             className="bg-[#FE661F] text-white px-8 py-3.5 rounded-full hover:bg-[#FF5500] transition-colors text-base md:text-lg font-semibold hover:scale-105 transform duration-200 shadow-md"
//           >
//             Join Now
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function StickyFooter() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-02-09T23:59:59+05:30').getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-transparent px-0 md:px-4 py-4">
      <div className="max-w-5xl mx-auto bg-[#fe661f]/70 dark:bg-[#fe661f]/10 backdrop-blur-md md:rounded-full shadow-lg border border-[#FE661F]/20">
        <div className="flex flex-col md:flex-row items-center justify-between p-3 md:p-4 space-y-3 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center md:space-x-6 w-full md:w-auto">
            <div className="bg-[#E6F5E6] px-5 py-3 rounded-full w-full md:w-auto text-center md:text-left mb-3 md:mb-0">
              <span className="text-[#FE661F] font-bold text-lg md:text-xl">
                ₹199
                <span className="line-through text-gray-500 ml-3 text-base md:text-lg">₹1,999</span>
              </span>
            </div>
            
            {/* Mobile date and countdown */}
            <div className="md:hidden flex flex-col items-center space-y-2 w-full">
              <p className="text-black dark:text-white text-base font-medium">
                Deadline 9 Feb, 2025
              </p>
              <div className="flex items-center space-x-2 text-[#FE661F] font-semibold">
                <span className="bg-white px-2 py-1 rounded-md text-sm">
                  {timeLeft.days}d
                </span>
                <span className="bg-white px-2 py-1 rounded-md text-sm">
                  {timeLeft.hours}h
                </span>
                <span className="bg-white px-2 py-1 rounded-md text-sm">
                  {timeLeft.minutes}m
                </span>
                <span className="bg-white px-2 py-1 rounded-md text-sm">
                  {timeLeft.seconds}s
                </span>
              </div>
            </div>

            {/* Desktop date and countdown */}
            <div className="hidden md:flex items-center space-x-3">
              <p className="text-black text-base dark:text-white md:text-lg font-medium">
                Deadline 9 Feb, 2025
              </p>
              <div className="flex items-center space-x-2 text-[#FE661F] font-semibold">
                <span className="bg-white px-2 py-1 rounded-md text-base">
                  {timeLeft.days}d
                </span>
                <span className="bg-white px-2 py-1 rounded-md text-base">
                  {timeLeft.hours}h
                </span>
                <span className="bg-white px-2 py-1 rounded-md text-base">
                  {timeLeft.minutes}m
                </span>
                <span className="bg-white px-2 py-1 rounded-md text-base">
                  {timeLeft.seconds}s
                </span>
              </div>
            </div>
          </div>
          
          <Link
            href="/register"
            className="bg-[#FE661F] text-white px-8 py-3.5 rounded-full hover:bg-[#FF5500] transition-colors text-base md:text-lg font-semibold hover:scale-105 transform duration-200 shadow-md w-full md:w-auto text-center"
          >
            Join Now
          </Link>
        </div>
      </div>
    </div>
  );
}