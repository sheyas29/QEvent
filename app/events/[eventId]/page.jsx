import Tag from '@/components/Tag';
import Link from 'next/link';

export default async function Page({ params }) {
  const { eventId } = await params;

  const res = await fetch(
    `https://qevent-backend.labs.crio.do/events/${eventId}`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch event');
  }

  const eventData = await res.json();

  return (
    <main className="min-h-screen bg-white">
      <div className="w-full bg-white px-6 sm:px-10 lg:px-12 py-2 pb-4">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={eventData.image}
            alt={eventData.name}
            className="w-[240px] h-[150px] object-cover"
          />
        </div>

        {/* Event details */}
        <div className="mt-1">
          {/* Event name */}
          <h1 className="text-[22px] font-bold text-[#c58a3a] leading-tight">
            {eventData.name}
          </h1>

          {/* Location */}
          <p className="text-[12px] font-semibold text-[#c58a3a]">
            {eventData.location}
          </p>

          {/* Artist */}
          <p className="text-[12px] font-bold text-[#c58a3a]">
            {eventData.artist}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-8">
            {eventData.tags.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>

          {/* Description */}
          <p className="text-[12px] leading-[1.3] text-black mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            cumque placeat architecto dolorem inventore ex eius recusandae quod
            perspiciatis voluptatum maxime porro soluta repellat tempore
            accusamus. Incidunt, iure laborum? Modi odio possimus dicta sapiente
            neque tempora corporis recusandae nostrum et, ipsam omnis laudantium
            eum dolorem pariatur ad commodi autem. Consectetur similique quam
            deleniti, nobis ullam error quisquam ipsam culpa! Quaerat, enim
            dolorem repellendus!
          </p>

          {/* Bottom row */}
          <div className="flex justify-between items-end mt-2">
            {/* Price */}
            <p className="text-[20px] font-bold text-[#7c9b60]">
              {eventData.price > 0
                ? `₹${eventData.price.toLocaleString('en-IN')}`
                : 'FREE'}
            </p>

            {/* Buy ticket */}
            <Link
              href="#"
              className="bg-[#ef6461] text-white text-[9px] font-semibold px-3 py-1.5 rounded-md hover:bg-[#d9534f] transition"
            >
              Buy Tickets
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
