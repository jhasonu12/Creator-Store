export default function LaunchSteps() {
  const steps = [
    {
      number: 1,
      title: "Create Your Store",
      description: "Customize your link-in-bio storefront with your brand colors and messaging.",
    },
    {
      number: 2,
      title: "Add Your Products",
      description: "Create digital products, courses, coaching sessions, and more in minutes.",
    },
    {
      number: 3,
      title: "Start Selling",
      description: "Share your link everywhere. We handle payments and your customers get instant access.",
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Launch your store in minutes.
          </h2>
          <p className="text-gray-600 mt-4">Get up and running with three simple steps. No coding required.</p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
          {steps.map((step) => (
            <div key={step.number} className="text-center relative">
              {/* Circle Number */}
              <div className="w-12 h-12 rounded-full border-2 border-purple-600 flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold text-purple-600">{step.number}</span>
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>

              {/* Connecting Line (hidden on mobile) */}
              {step.number < 3 && (
                <div className="hidden sm:block absolute w-1/2 h-px bg-gray-300 top-1/2 right-0 transform translate-x-1/2" aria-hidden />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
