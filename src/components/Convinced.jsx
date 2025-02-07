import React from 'react';
import { ArrowRight } from "lucide-react";
import Link from 'next/link';

export default function Convinced() {
  return (
    <section className="bg-white dark:bg-[#1A1D1F] py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="relative mb-8">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 200 20" 
            className="w-full h-4 text-[#fe661f] dark:text-[#fe661f]"
          >
            <path d="M0,10 Q50,5 100,10 T200,10" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          HMMM, STILL NOT CONVINCED???
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-4">
          P.S. Since you've read this far, it's clear you're interested in supercharging and growing your career.
        </p>

        <p className="text-gray-600 dark:text-gray-300 mb-4">
          There's only one thing left for you to do: Click the button below and join me in the Live Workshop...
        </p>

        <div className="bg-white dark:bg-[#1A1D1F] p-4 rounded-lg mb-6">
          <p className="text-gray-800 dark:text-white font-semibold">
            P.P.S. CURRENTLY THE WORKSHOP IS FOR JUST RS 9
            <br />
            <span className="text-sm">(less than a CHOCOLATE)</span>
          </p>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            BUT THE PRICES CAN INCREASE ANYTIME!
          </p>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-6">
          So, click here to reserve your seat now!!!
          <br />
          And I'll see you Live...
        </p>

        {/* <Link 
          href="/register"
          className="inline-block bg-[#FE661F] text-white font-bold py-4 px-6 rounded-lg text-lg hover:bg-[#FF5500] transition-colors duration-300 transform hover:scale-105"
        >
          » Become a super working professional now!
          <br />
          <span className="text-sm">(Only Rs-929 Rs.9)</span>
        </Link> */}

 {/* CTA Section */}
 <div className="mt-4 text-center">
          <Link
            href="/register"
            className="inline-flex flex-col items-center justify-center w-full max-w-lg mx-auto px-6 py-2 bg-[#FE661F] text-white font-bold rounded-lg hover:bg-[#FF5500] transition-colors duration-300 group"
          >
            <div className="flex items-center">
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              <span className="text-2xl mr-3 ml-4">
                Become an Expert AI Engineer Now
              </span>
            </div>
            <div className=" text-sm">
              <span className="text-lg text-white">
                {" "}
                ( Only <strike> Rs.500</strike>{" "}
                <span className="text-2xl"> Rs.26</span> ){" "}
              </span>
            </div>
          </Link>
        </div>
        <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm">
          REGISTER BEFORE MIDNIGHT OF FEBRUARY 07, 2025
          <br />
          To Unlock All Bonuses Worth Rs. 10,500
        </p>
      </div>
    </section>
  );
}