"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* NAV */}
      <header className="flex justify-between items-center px-10 py-6 border-b sticky top-0 bg-white/80 backdrop-blur">
        <h1 className="text-2xl font-extrabold">AgencyX</h1>

        <nav className="hidden md:flex gap-8 text-sm text-gray-600">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#demo">Demo</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="text-center py-32 px-6 bg-gradient-to-b from-gray-50 to-white">
        <h1 className="text-6xl font-extrabold">
          Premium Agency <span className="text-gray-500">Template</span> 🚀
        </h1>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          A modern Next.js + Tailwind website template for agencies and startups.
          Built to convert visitors into clients.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a className="px-8 py-3 bg-black text-white rounded-full hover:scale-105 transition" href="#pricing">
            Buy Now
          </a>

          <a className="px-8 py-3 border rounded-full hover:scale-105 transition" href="#demo">
            Live Demo
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 px-10">
        <h2 className="text-4xl font-bold text-center mb-14">Features</h2>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 border rounded-xl">⚡ Fast Performance</div>
          <div className="p-6 border rounded-xl">🎨 Modern UI</div>
          <div className="p-6 border rounded-xl">📱 Fully Responsive</div>
        </div>
      </section>

      {/* DEMO */}
      <section id="demo" className="py-24 px-10 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold">Live Demo</h2>
        <p className="mt-4 text-gray-600">Replace this section with screenshots or video</p>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-10">
        <h2 className="text-4xl font-bold text-center mb-14">Pricing</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-2xl text-center">
            <h3 className="font-bold">Basic</h3>
            <p className="text-3xl mt-4">$29</p>
          </div>

          <div className="p-6 border-2 border-black rounded-2xl text-center scale-105">
            <h3 className="font-bold">Pro</h3>
            <p className="text-3xl mt-4">$59</p>
          </div>

          <div className="p-6 border rounded-2xl text-center">
            <h3 className="font-bold">Premium</h3>
            <p className="text-3xl mt-4">$99</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 text-center bg-black text-white">
        <h2 className="text-4xl font-bold">Start Selling Today</h2>
        <p className="mt-4 text-gray-300">
          Get the template and launch your business instantly.
        </p>

        <a
          href="https://gumroad.com"
          className="mt-8 inline-block px-8 py-3 bg-white text-black rounded-full"
        >
          Buy Template
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} AgencyX. All rights reserved.
      </footer>

    </main>
  );
}