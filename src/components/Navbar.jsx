import { useState } from 'react';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-extrabold tracking-tight text-gray-900">Lenscraft</a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex">
          <a href="#services" className="hover:text-gray-900">Services</a>
          <a href="#portfolio" className="hover:text-gray-900">Portfolio</a>
          <a href="#about" className="hover:text-gray-900">About</a>
          <a href="#contact" className="rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-black">Book</a>
        </nav>

        <button className="md:hidden" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-gray-200 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium text-gray-700">
            <a href="#services" onClick={() => setOpen(false)}>Services</a>
            <a href="#portfolio" onClick={() => setOpen(false)}>Portfolio</a>
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#contact" className="rounded-md bg-gray-900 px-4 py-2 text-white" onClick={() => setOpen(false)}>Book</a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
