import EventsList from '@/components/EventsList';
import { Suspense } from 'react';

export default async function Page() {
  const res = await fetch('https://qevent-backend.labs.crio.do/events');

  const data = await res.json();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EventsList data={data} />
    </Suspense>
  );
}
