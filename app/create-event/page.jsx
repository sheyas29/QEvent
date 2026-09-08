'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function CreateEvent() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/events');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white p-10">
      <h1 className="text-3xl font-bold text-[#c58a3a]">Create Event</h1>

      <p className="mt-4">Welcome, {session.user?.name}</p>
    </div>
  );
}
