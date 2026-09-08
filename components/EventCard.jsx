'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Tag from './Tag';

const EventCard = ({ eventData }) => {
  const router = useRouter();

  return (
    <div className="hover-inverse group w-full h-full transform transition-transform duration-400 hover:scale-110 hover:bg-gradient-to-r hover:from-orange-200 hover:to-white text-dark m-4 border-slate-400 border rounded-md px-8 py-2.5">
      {/* Event content */}
      <Link
        href={`/events/${eventData.id}`}
        className="rounded-md text-dark flex-shrink-0 scroll-snap-card p-4 block"
      >
        <img
          className="w-full mb-3 group-hover:filter-none shadow-lg m-auto"
          src={eventData.image}
          alt={eventData.name}
        />

        <p className="mt-5 mb-2">
          {new Date(eventData.date).toDateString()} | {eventData.time}
        </p>

        <p>{eventData.location}</p>

        <h2 className="text-2xl font-bold">{eventData.name}</h2>

        <div className="flex justify-between items-center mt-10">
          <h3 className="text-2xl">{eventData.artist}</h3>

          <h3 className="text-2xl">
            {eventData.price > 0
              ? `₹${eventData.price.toLocaleString('en-IN')}`
              : 'FREE'}
          </h3>
        </div>
      </Link>

      {/* Tags - separate from event Link */}
      <div className="flex gap-2 items-center px-4">
        {eventData.tags.map((tag) => (
          <Tag
            key={tag}
            text={tag}
            onClick={() =>
              router.push(`/events?tag=${encodeURIComponent(tag)}`)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default EventCard;
