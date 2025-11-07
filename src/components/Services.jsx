import { Camera, Heart, GraduationCap } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: 'Event Photography',
    desc: 'Dynamic coverage that preserves the energy and details of your event.',
  },
  {
    icon: Heart,
    title: 'Wedding Photography',
    desc: 'Elegant storytelling from the aisle to the afterglow—every precious moment.',
  },
  {
    icon: GraduationCap,
    title: 'Graduation Photography',
    desc: 'Proud portraits and candid celebration shots to mark your milestone.',
  },
];

function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What I Offer</h2>
          <p className="mt-3 text-gray-600">Tailored packages for every story—crafted with care and delivered with consistency.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm transition hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900 text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
