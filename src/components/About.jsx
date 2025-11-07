function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About My Brand</h2>
            <p className="mt-4 text-gray-600">
              I’m a photographer focused on honest storytelling—balancing editorial polish with real, candid moments. From intimate weddings to high-energy events and proud graduations, my approach centers on empathy, detail, and timeless color.
            </p>
            <p className="mt-3 text-gray-600">
              My process is simple: understand your vision, plan with intention, and deliver imagery that stands the test of time. I offer custom packages, quick turnarounds, and clear communication every step of the way.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#portfolio" className="rounded-md border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">See Work</a>
              <a href="#contact" className="rounded-md bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:bg-black">Get a Quote</a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=1600&auto=format&fit=crop" alt="Camera gear" className="h-48 w-full rounded-xl object-cover shadow-md md:h-56" />
            <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1600&auto=format&fit=crop" alt="Wedding moment" className="h-48 w-full rounded-xl object-cover shadow-md md:h-56" />
            <img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?q=80&w=1600&auto=format&fit=crop" alt="Event crowd" className="h-48 w-full rounded-xl object-cover shadow-md md:h-56" />
            <img src="https://images.unsplash.com/photo-1530023367847-a683933f4172?q=80&w=1600&auto=format&fit=crop" alt="Graduate portrait" className="h-48 w-full rounded-xl object-cover shadow-md md:h-56" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
