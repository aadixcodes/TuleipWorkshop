// import React from 'react';
// import { CheckCircle2, ArrowRight } from 'lucide-react';
// import Link from 'next/link';

// const bonusItems = [
//   {
//     number: '1',
//     title: 'List of Gold-Standard and Hidden Prompts for GPT16',
//     description: 'Unlock exclusive, high-performance prompts that dramatically enhance AI interactions.'
//   },
//   {
//     number: '2',
//     title: 'Copy-Paste Template To Using All in one AI Tools',
//     description: 'Ready-to-use templates for seamless integration with top AI platforms like Simplified.com.'
//   },
//   {
//     number: '3',
//     title: 'Step by Step Method of Coding a Website',
//     description: 'Comprehensive guide to web development for complete beginners, no tech experience required.'
//   },
//   {
//     number: '4',
//     title: 'Creating AI Generated Personas',
//     description: 'Generate 10 advanced AI personas using Synthesia, providing deep insights and support.'
//   }
// ];

// export default function BonusSection() {
//   return (
//     <section className="py-16 bg-white dark:bg-[#1A1D1F]">
//       <div className="container mx-auto px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
//               And Also Enjoy Bonuses Worth <span className="text-[#FE661F]">₹4999</span> for FREE!
//             </h2>
//             <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
//               Supercharge your learning with these exclusive bonuses designed to accelerate your AI expertise.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {bonusItems.map((item, index) => (
//               <div 
//                 key={index} 
//                 className="group relative bg-gradient-to-br from-[#2E8B57]/90 to-[#2E8B57] text-white rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
//               >
//                 <div className="absolute top-0 right-0 mt-4 mr-4">
//                   <CheckCircle2 className="h-6 w-6 text-white/80" />
//                 </div>
//                 <div className="flex flex-col h-full">
//                   <span className="text-4xl font-bold text-white/30 mb-4">{item.number}</span>
//                   <h3 className="text-xl font-semibold mb-3 line-clamp-2">{item.title}</h3>
//                   <p className="text-white/80 text-sm flex-grow">{item.description}</p>
//                 </div>
//                 <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
//               </div>
//             ))}
//           </div>

//           {/* <div className="text-center mt-12">
//             <Link 
//               href="/register"
//               className="inline-flex items-center justify-center px-8 py-4 bg-[#FE661F] text-white font-bold rounded-xl hover:bg-[#FF5500] transition-all duration-300 transform hover:scale-105 group"
//             >
//               Join Now 
//               <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
//             </Link>
//             <p className="mt-4 text-gray-600 dark:text-gray-400">
//               <span className="text-2xl font-bold text-[#FE661F]">₹9</span>
//               <span className="mx-2">instead of</span>
//               <span className="text-lg line-through text-gray-500">₹500</span>
//             </p>
//           </div> */}
//         </div>


//         {/* CTA Section */}
//         <div className="mt-12 text-center">
//           <Link
//             href="/register"
//             className="inline-flex flex-col items-center justify-center w-full max-w-lg mx-auto px-6 py-2 bg-[#FE661F] text-white font-bold rounded-lg hover:bg-[#FF5500] transition-colors duration-300 group"
//           >
//             <div className="flex items-center">
//               <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
//               <span className="text-2xl mr-3 ml-4">
//                 Become an Expert AI Engineer Now
//               </span>
//             </div>
//             <div className="text-sm">
//               <span className="text-lg text-white">
//                 {" "}
//                 ( Only <strike> Rs.500</strike>{" "}
//                 <span className="text-2xl"> Rs.26</span> ){" "}
//               </span>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const bonusItems = [
  {
    number: '1',
    title: 'List of Gold-Standard and Hidden Prompts for GPT16',
    description: 'Unlock exclusive, high-performance prompts that dramatically enhance AI interactions.'
  },
  {
    number: '2',
    title: 'Copy-Paste Template To Using All in one AI Tools',
    description: 'Ready-to-use templates for seamless integration with top AI platforms like Simplified.com.'
  },
  {
    number: '3',
    title: 'Step by Step Method of Coding a Website',
    description: 'Comprehensive guide to web development for complete beginners, no tech experience required.'
  },
  {
    number: '4',
    title: 'Creating AI Generated Personas',
    description: 'Generate 10 advanced AI personas using Synthesia, providing deep insights and support.'
  }
];

export default function BonusSection() {
  return (
    <section className="py-16 bg-white dark:bg-[#1A1D1F]">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              And Also Enjoy Bonuses Worth <span className="text-[#FE661F]">₹4999</span> for FREE!
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Supercharge your learning with these exclusive bonuses designed to accelerate your AI expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bonusItems.map((item, index) => (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-[#2E8B57]/90 to-[#2E8B57] text-white rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="absolute top-0 right-0 mt-4 mr-4 hidden md:block">
                  <CheckCircle2 className="h-6 w-6 text-white/80" />
                </div>
                <div className="flex flex-col h-full">
                  <span className="text-4xl font-bold text-white/30 mb-4 hidden md:block">{item.number}</span>
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">{item.title}</h3>
                  <p className="text-white/80 text-sm flex-grow">{item.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            ))}
          </div>

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
      </div>
    </section>
  );
}