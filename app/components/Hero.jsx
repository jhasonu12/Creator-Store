import { Search, Check } from 'lucide-react';

export default function Hero() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 leading-tight">
            Your Store, Your Rules.
          </h1>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent mb-6">
            Built for Creators.
          </h2>
          
          <p className="text-gray-600 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
            The ultimate link-in-bio solution to sell digital products, courses, and services directly to your audience.
          </p>
        </div>

        {/* Search and CTA */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-gray-400 absolute left-3" />
            <input
              type="text"
              placeholder="your-store / yourname"
              className="flex-1 max-w-sm pl-10 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm"
            />
          </div>
          <button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition whitespace-nowrap">
            Claim Your Lookahead
          </button>
        </div>

        {/* Checkbox */}
        <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-12">
          <Check className="w-4 h-4 text-green-500" />
          <span>30-day free trial. No credit card required.</span>
        </div>

        {/* Hero Image */}
        <div className="bg-gradient-to-br from-pink-300 via-pink-200 to-orange-200 rounded-2xl overflow-hidden shadow-lg h-64 sm:h-80 lg:h-96 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-600 font-medium">Hero Image - Colorful Creator</p>
            <p className="text-gray-500 text-sm mt-2">(Your image would go here)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
