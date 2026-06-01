export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* NAVBAR */}
      <header className="flex justify-between items-center px-10 py-6 border-b">
        <h1 className="text-2xl font-extrabold">AgencyPro</h1>

        <nav className="flex gap-6 text-sm text-gray-600">
          <a href="#services" className="hover:text-black">Services</a>
          <a href="#about" className="hover:text-black">About</a>
          <a href="#pricing" className="hover:text-black">Pricing</a>
          <a href="#contact" className="hover:text-black">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="text-center py-28 px-6 bg-gray-50">
        <h2 className="text-5xl font-extrabold leading-tight">
          We Build High-Converting Websites 🚀
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          We help businesses grow with modern, fast and conversion-focused websites
          designed to turn visitors into customers.
        </p>

        <button className="mt-8 px-8 py-3 bg-black text-white rounded-full hover:scale-105 transition">
          Get Started
        </button>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-10">
        <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border p-6 rounded-xl">
            <h4 className="font-bold text-xl">Web Design</h4>
            <p className="text-gray-600 mt-2">Modern UI/UX designs that convert.</p>
          </div>

          <div className="border p-6 rounded-xl">
            <h4 className="font-bold text-xl">Development</h4>
            <p className="text-gray-600 mt-2">Fast, scalable Next.js websites.</p>
          </div>

          <div className="border p-6 rounded-xl">
            <h4 className="font-bold text-xl">SEO Optimization</h4>
            <p className="text-gray-600 mt-2">Rank higher and get more traffic.</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-10 bg-gray-50 text-center">
        <h3 className="text-3xl font-bold">Why Choose Us?</h3>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We are a performance-driven agency focused on delivering results,
          not just beautiful websites.
        </p>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 px-10">
        <h3 className="text-3xl font-bold text-center mb-12">Pricing Plans</h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-xl p-6 text-center">
            <h4 className="font-bold text-xl">Starter</h4>
            <p className="text-3xl mt-4">$99</p>
          </div>

          <div className="border-2 border-black rounded-xl p-6 text-center scale-105">
            <h4 className="font-bold text-xl">Pro</h4>
            <p className="text-3xl mt-4">$299</p>
          </div>

          <div className="border rounded-xl p-6 text-center">
            <h4 className="font-bold text-xl">Enterprise</h4>
            <p className="text-3xl mt-4">$599</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 text-center bg-black text-white">
        <h3 className="text-4xl font-bold">Ready to grow your business?</h3>
        <p className="mt-4 text-gray-300">
          Let’s build something amazing together.
        </p>

        <button className="mt-8 px-8 py-3 bg-white text-black rounded-full">
          Contact Us
        </button>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} AgencyPro. All rights reserved.
      </footer>

    </main>
  );
}