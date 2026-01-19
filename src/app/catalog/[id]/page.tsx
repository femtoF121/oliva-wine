export default async function Catalog({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 gap-4">
      Wine details page id: {id}
    </div>
  );
}
