import { Calendar, Clock, MapPin, Timer, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white dark:from-[#1A1D1F] dark:to-[#1A1D1F] transition-colors duration-200"
    >
      <div className="container mx-auto px-4">
        {/* Centered Heading & Description */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Learn <span className="text-[#FE661F]">25+ AI Tools</span> to Save
            Time & Boost Productivity
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Master the most powerful AI tools and transform your workflow. Join
            industry experts in this comprehensive workshop designed to
            skyrocket your productivity.
          </p>
        </div>

        {/* Content Grid + Image */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* 4x1 Date/Time Grid */}
          <div className="w-full md:w-auto">
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center space-x-4 p-3 rounded-lg bg-white dark:bg-gray-800/50 shadow-lg dark:shadow-none border border-gray-100 dark:border-gray-700">
                <Calendar className="h-7 w-7 text-[#FE661F]" />
                <span className="text-gray-700 dark:text-gray-300 font-semibold">
                  9th Feb, Sunday
                </span>
              </div>
              <div className="flex items-center space-x-4 p-3 rounded-lg bg-white dark:bg-gray-800/50 shadow-lg dark:shadow-none border border-gray-100 dark:border-gray-700">
                <Clock className="h-7 w-7 text-[#016CB6]" />
                <span className="text-gray-700 dark:text-gray-300 font-semibold">
                  3:00 PM IST
                </span>
              </div>
              <div className="flex items-center space-x-4 p-3 rounded-lg bg-white dark:bg-gray-800/50 shadow-lg dark:shadow-none border border-gray-100 dark:border-gray-700">
                <MapPin className="h-7 w-7 text-[#00A14B]" />
                <span className="text-gray-700 dark:text-gray-300 font-semibold">
                  Online (Live)
                </span>
              </div>
              <div className="flex items-center space-x-4 p-3 rounded-lg bg-white dark:bg-gray-800/50 shadow-lg dark:shadow-none border border-gray-100 dark:border-gray-700">
                <Timer className="h-7 w-7 text-[#FE661F]" />
                <span className="text-gray-700 dark:text-gray-300 font-semibold">
                  4 Hours
                </span>
              </div>
            </div>
          </div>

          {/* Image Container */}
          <div className="w-full md:max-w-[500px] flex justify-center">
            <img
              src="https://i.pinimg.com/736x/19/3b/9f/193b9f10d3ed1143844004fa94c750b9.jpg"
              alt="AI Workshop"
              className="rounded-lg shadow-lg object-contain w-full h-auto max-h-[400px]"
            />
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
