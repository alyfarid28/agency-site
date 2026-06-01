export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* HERO */}
      <section className="text-center py-32 px-6 bg-gradient-to-b from-gray-50 to-white">
        <h1 className="text-6xl font-extrabold">
          Premium Agency Website 🚀
        </h1>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          High-converting Next.js template built for agencies, freelancers, and startups.
          Ready to launch your business instantly.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a className="px-8 py-3 bg-black text-white rounded-full">
            Buy Now
          </a>

          <a className="px-8 py-3 border rounded-full">
            Live Demo
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-10 text-center">
        <h2 className="text-4xl font-bold mb-14">Features</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-xl">⚡ Fast Performance</div>
          <div className="p-6 border rounded-xl">🎨 Modern UI</div>
          <div className="p-6 border rounded-xl">📱 Fully Responsive</div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 px-10 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-14">Pricing</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-xl">$19 Basic</div>
          <div className="p-6 border-2 border-black rounded-xl scale-105">$29 Pro</div>
          <div className="p-6 border rounded-xl">$49 Premium</div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 text-center bg-black text-white">
        <h2 className="text-4xl font-bold">Start Building Today</h2>
        <p className="mt-4 text-gray-300">
          Get the template and launch your business instantly.
        </p>

        <a className="mt-8 inline-block px-8 py-3 bg-white text-black rounded-full">
          Buy Now
        </a>
      </section>

    </main>
  );
}