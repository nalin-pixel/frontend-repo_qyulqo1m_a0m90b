import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-white/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="pointer-events-auto max-w-2xl">
          <p className="mb-3 inline-block rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-900 backdrop-blur">
            Event • Wedding • Graduation
          </p>
          <h1 className="text-4xl font-extrabold text-white drop-shadow sm:text-6xl">
            Timeless Stories Through the Lens
          </h1>
          <p className="mt-4 text-base text-white/90 sm:text-lg">
            I capture the candid, the crafted, and everything in between—so your most meaningful moments live on beautifully.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#portfolio" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-900/30">
              View Portfolio
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-white/70 bg-transparent px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30">
              Book a Session
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
