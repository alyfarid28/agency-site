"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* NAV */}
      <header className="flex justify-between items-center px-10 py-6 border-b sticky top-0 bg-white/80 backdrop-blur">
        <h1 className="text-2xl font-extrabold">StudioX</h1>

        <nav className="hidden md:flex gap-8 text-sm text-gray-600">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#cta">Get Started</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="text-center py-36 px-6 bg-gradient-to-b from-gray-50 to-white">
        <h1 className="text-6xl font-extrabold leading-tight">
          Build <span className="text-gray-500">Client-Getting</span><br />
          Agency Websites 🚀
        </h1>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          A premium production-ready Next.js template designed to help you attract clients,
          build trust, and increase conversions instantly.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a className="px-8 py-3 bg-black text-white rounded-full hover:scale-105 transition">
            Get Instant Access ($59)
          </a>

          <a className="px-8 py-3 border rounded-full hover:scale-105 transition">
            View Live Demo
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          ⚡ Used by freelancers & agencies worldwide
        </p>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 px-10">
        <h2 className="text-4xl font-bold text-center mb-14">
          Why Developers Choose This
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "🔥 Built for High Conversion",
            "⚡ Lightning Fast (Next.js)",
            "🎨 Premium Modern UI",
            "📱 Fully Responsive",
            "🚀 Client-Ready Structure",
            "💼 Perfect for Agencies"
          ].map((f, i) => (
            <div key={i} className="p-6 border rounded-xl hover:scale-105 transition">
              {f}
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-10 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-14">
          Simple Pricing
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-xl text-center">
            <h3 className="font-bold">Starter</h3>
            <p className="text-3xl mt-4">$29</p>
          </div>

          <div className="p-6 border-2 border-black rounded-xl text-center scale-105 shadow-xl">
            <h3 className="font-bold">Most Popular</h3>
            <p className="text-3xl mt-4">$59</p>
            <p className="text-sm text-gray-500 mt-2">Best for freelancers</p>
          </div>

          <div className="p-6 border rounded-xl text-center">
            <h3 className="font-bold">Agency License</h3>
            <p className="text-3xl mt-4">$99</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-28 text-center bg-black text-white">
        <h2 className="text-4xl font-bold">
          Start Closing More Clients Today
        </h2>

        <p className="mt-4 text-gray-300">
          Download the template and launch your agency website in minutes.
        </p>

        <a className="mt-8 inline-block px-8 py-3 bg-white text-black rounded-full hover:scale-105 transition">
          Buy Now ($59)
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} StudioX. All rights reserved.
      </footer>

    </main>
  );
}