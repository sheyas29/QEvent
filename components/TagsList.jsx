'use client';

import Tag from '@/components/Tag';
import { useRouter } from 'next/navigation';

export default function TagsList({ data }) {
  const router = useRouter();

  return (
    <div className="grid grid-cols-3 gap-7 px-0 md:px-5 lg:px-10 py-10">
      {data.map((tag) => (
        <div key={tag.id} className="flex justify-center">
          <Tag
            text={tag.name}
            onClick={() =>
              router.push(`/events?tag=${encodeURIComponent(tag.name)}`)
            }
          />
        </div>
      ))}
    </div>
  );
}
