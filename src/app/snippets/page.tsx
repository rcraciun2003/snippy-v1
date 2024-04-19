import HeaderPages from '@/components/ui/HeaderPages';

export default function Projects() {
  const currentPage = 'Snippets';
  return (
    <>
      <HeaderPages currentPage={currentPage} />
      <main className='min-h-full bg-gray-100'>
        <h1>snippets page</h1>
      </main>
    </>
  );
}
