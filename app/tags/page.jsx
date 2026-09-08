import TagsList from '@/components/TagsList';

export default async function Page() {
  const res = await fetch('https://qevent-backend.labs.crio.do/tags');

  const data = await res.json();

  return <TagsList data={data} />;
}
