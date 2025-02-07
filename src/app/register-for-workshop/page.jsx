'use client';

import React from 'react';

export default function Register() {
  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-[#1A1D1F]">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-md w-full p-8">
        {/* Header */}
        <div className="bg-[#FE661F] text-white rounded-t-lg p-4 text-center">
          <h2 className="text-2xl font-bold">ChatGPT 101</h2>
          <p className="text-lg mt-2">
            ₹169.00 <span className="line-through">₹1,999.00</span> + GST
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FE661F]"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="example@example.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FE661F]"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center">
              <span className="inline-block bg-gray-200 px-3 py-2 rounded-l-lg">🇮🇳</span>
              <input
                type="tel"
                placeholder="XXXXXXXXXX"
                className="w-full px-4 py-2 border-t border-r border-b rounded-r-lg focus:outline-none focus:ring-2 focus:ring-[#FE661F]"
              />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              You will get updates on your <span className="text-green-500">WhatsApp</span>
            </p>
          </div>

          <div className="flex items-center">
            <input type="checkbox" id="gst" className="mr-2" />
            <label htmlFor="gst" className="text-gray-700 dark:text-gray-300">
              I have a GST number
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#FE661F] text-white py-3 rounded-lg hover:bg-[#FF5500] transition-colors"
          >
            Next
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm mt-6">
          By proceeding you agree to our <a href="#" className="text-[#FE661F]">Terms</a>, <a href="#" className="text-[#FE661F]">Privacy</a> & <a href="#" className="text-[#FE661F]">Refund Policy</a>
        </p>
      </div>
    </div>
  );
}