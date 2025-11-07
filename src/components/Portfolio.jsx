function Portfolio() {
  const items = [
    {
      category: 'Weddings',
      image:
        'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1600&auto=format&fit=crop',
    },
    {
      category: 'Events',
      image:
        'https://images.unsplash.com/photo-1515165562835-c3b8c7e2a67b?q=80&w=1600&auto=format&fit=crop',
    },
    {
      category: 'Graduation',
      image:
        'https://images.unsplash.com/photo-1596496057744-3c0f9a4b1f2c?q=80&w=1600&auto=format&fit=crop',
    },
    {
      category: 'Portraits',
      image:
        'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?q=80&w=1600&auto=format&fit=crop',
    },
    {
      category: 'Ceremonies',
      image:
        'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1600&auto=format&fit=crop',
    },
    {
      category: 'Candid Moments',
      image:
        'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1600&auto=format&fit=crop',
    },
  ];

  return (
    <section id="portfolio" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Portfolio</h2>
          <p className="mt-3 text-gray-600">A curated selection of recent work across celebrations and milestones.</p>
        </div>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {items.map((item, idx) => (
            <figure key={idx} className="mb-4 break-inside-avoid overflow-hidden rounded-xl">
              <img
                src={item.image}
                alt={item.category}
                className="h-auto w-full transform object-cover transition duration-300 hover:scale-[1.02]"
                loading="lazy"
              />
              <figcaption className="p-3 text-sm font-medium text-gray-700">{item.category}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
