export default function Home() {
  const pricing = [
    {
      title: 'Basic Home Clean',
      price: '$99',
      features: ['2 Bedrooms', 'Kitchen Cleaning', 'Bathroom Cleaning', 'Vacuum & Mop'],
    },
    {
      title: 'Deep Cleaning',
      price: '$199',
      features: ['Full House Deep Clean', 'Windows Included', 'Detailed Bathroom', 'Kitchen Degreasing'],
    },
    {
      title: 'End Of Lease',
      price: '$299',
      features: ['Bond Cleaning', 'Carpet Vacuum', 'Kitchen & Oven', 'Spotless Finish'],
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" className="w-14 h-14 rounded-full" />
            <div>
              <h1 className="text-2xl font-bold text-blue-700">AV Cleaning</h1>
              <p className="text-xs text-green-600">ABSOLUTE VALUE IN CLEANLINESS</p>
            </div>
          </div>

          <a
            href="tel:0415414854"
            className="bg-green-500 text-white px-5 py-3 rounded-full font-bold"
          >
            Call Now
          </a>
        </div>
      </header>

      <section className="min-h-screen flex items-center bg-gradient-to-r from-blue-900 to-green-600 text-white px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center py-32">
          <div>
            <h2 className="text-5xl lg:text-7xl font-black leading-tight mb-8">
              Making Every Space Shine.
            </h2>

            <p className="text-xl mb-10">
              Professional residential and commercial cleaning services across Australia.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="tel:0415414854"
                className="bg-green-500 px-8 py-4 rounded-full font-bold"
              >
                📞 0415414854
              </a>

              <a
                href="mailto:avcleaning2525@gmail.com"
                className="border border-white px-8 py-4 rounded-full font-bold"
              >
                Email Us
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <img src="/logo.jpg" className="w-full max-w-lg" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl font-black text-center mb-16">Pricing</h3>

          <div className="grid md:grid-cols-3 gap-10">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-10 shadow-2xl"
              >
                <h4 className="text-3xl font-black mb-4">{plan.title}</h4>

                <p className="text-5xl font-black text-blue-700 mb-8">
                  {plan.price}
                </p>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i}>✔️ {feature}</li>
                  ))}
                </ul>

                <a
                  href="tel:0415414854"
                  className="block text-center bg-green-500 text-white py-4 rounded-full font-bold"
                >
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-700 to-green-500 rounded-3xl p-12 text-white text-center">
          <h3 className="text-5xl font-black mb-8">
            Contact AV Cleaning
          </h3>

          <p className="text-2xl mb-4">📞 0415414854</p>
          <p className="text-2xl mb-10">📧 avcleaning2525@gmail.com</p>

          <a
            href="tel:0415414854"
            className="bg-white text-blue-700 px-8 py-4 rounded-full font-bold"
          >
            Call Now
          </a>
        </div>
      </section>
    </main>
  );
}
