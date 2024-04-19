import HeaderPages from '@/components/ui/HeaderPages';

export default function Projects() {
  const currentPage = 'Projects';
  return (
    <>
      <HeaderPages currentPage={currentPage} />
      <main className='min-h-full bg-gray-100'>
        <h1>projects page</h1>
      </main>
    </>
  );
}
