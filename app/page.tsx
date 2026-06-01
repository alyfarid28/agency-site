export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">

      {/* Header */}
      <header className="flex justify-between items-center px-10 py-5 border-b">
        <h2 className="text-xl font-bold">AgencyPro</h2>

        <nav className="flex gap-6 text-sm">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center py-24 px-6">
        <h1 className="text-5xl font-extrabold">
          We Build Websites That Sell 🚀
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          High-converting websites for modern businesses.
        </p>

        <button className="mt-8 px-6 py-3 bg-black text-white rounded-full">
          Get Started
        </button>
      </section>

      {/* Pricing */}
      <section className="grid md:grid-cols-3 gap-6 px-10 py-20">

        <div className="border rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold">Starter</h3>
          <p className="text-2xl mt-4">$99</p>
        </div>

        <div className="border-2 border-black rounded-xl p-6 text-center scale-105">
          <h3 className="text-xl font-bold">Pro</h3>
          <p className="text-2xl mt-4">$299</p>
        </div>

        <div className="border rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold">Enterprise</h3>
          <p className="text-2xl mt-4">$599</p>
        </div>

      </section>

    </div>
  );
}