import { CheckCircle2 } from 'lucide-react';

const benefits = [
  {
    title: 'Hands-on Learning',
    description: 'Practice with real-world examples and projects during the workshop',
  },
  {
    title: 'Expert Guidance',
    description: 'Learn from industry professionals with years of AI experience',
  },
  {
    title: 'Lifetime Access',
    description: 'Get unlimited access to workshop recordings and resources',
  },
  {
    title: 'Community Support',
    description: 'Join an exclusive community of AI enthusiasts and professionals',
  },
  {
    title: 'Certificate',
    description: 'Receive a verified certificate upon workshop completion',
  },
  {
    title: 'Resource Library',
    description: 'Access a curated collection of AI tools and learning materials',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-16 bg-white dark:bg-[#1A1D1F] transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
          What You'll <span className="text-[#FE661F]">Get</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800/70 transition-colors shadow-lg dark:shadow-none"
            >
              <CheckCircle2 className="h-6 w-6 text-[#00A14B] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}