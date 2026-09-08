import ArtistCard from '@/components/ArtistCard';
export default async function page() {
  const res = await fetch('https://qevent-backend.labs.crio.do/artists');
  const data = await res.json();
  return (
    <div className="grid grid-cols-4  gap-7 px-0 md:px-5 lg:px-10 py-10">
      {data.map((artist) => (
        <ArtistCard key={artist.id} artistData={artist} />
      ))}
    </div>
  );
}
