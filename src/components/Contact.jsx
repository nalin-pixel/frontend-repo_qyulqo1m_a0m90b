import { useState } from 'react';

function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      // This is a front-end only demo submit. Hook to your backend or email service.
      await new Promise((r) => setTimeout(r, 800));
      setStatus('Thanks! I will get back to you shortly.');
    } catch (e) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Let’s Work Together</h2>
          <p className="mt-3 text-gray-600">Share your event details and I’ll respond within 24 hours.</p>
        </div>

        <form onSubmit={onSubmit} className="mx-auto mt-12 max-w-2xl rounded-2xl bg-white p-6 shadow">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Name</label>
              <input required type="text" className="w-full rounded-md border border-gray-200 px-3 py-2 focus:border-gray-900 focus:outline-none" placeholder="Your full name" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
              <input required type="email" className="w-full rounded-md border border-gray-200 px-3 py-2 focus:border-gray-900 focus:outline-none" placeholder="you@example.com" />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-1 block text-sm font-medium text-gray-700">Service</label>
            <select className="w-full rounded-md border border-gray-200 px-3 py-2 focus:border-gray-900 focus:outline-none">
              <option>Event Photography</option>
              <option>Wedding Photography</option>
              <option>Graduation Photography</option>
              <option>Portrait Session</option>
            </select>
          </div>
          <div className="mt-4">
            <label className="mb-1 block text-sm font-medium text-gray-700">Message</label>
            <textarea rows={4} className="w-full rounded-md border border-gray-200 px-3 py-2 focus:border-gray-900 focus:outline-none" placeholder="Tell me about your vision..." />
          </div>
          <div className="mt-6 flex items-center justify-between gap-4">
            <p className="text-sm text-gray-600">{status}</p>
            <button type="submit" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-900/30">
              Send Inquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
