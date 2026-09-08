'use client';

import EventCard from '@/components/EventCard';
import { useSearchParams } from 'next/navigation';

export default function EventsList({ data }) {
  const searchParams = useSearchParams();

  const artist = searchParams.get('artist');
  const tag = searchParams.get('tag');

  const filteredData = tag
    ? data.filter((event) => event.tags.includes(tag))
    : artist
      ? data.filter((event) => event.artist === artist)
      : data;

  return (
    <div className="grid grid-cols-3 gap-7 px-0 md:px-5 lg:px-10 py-10 min-h-screen bg-white text-black">
      {filteredData.map((event) => (
        <EventCard key={event.id} eventData={event} />
      ))}
    </div>
  );
}
