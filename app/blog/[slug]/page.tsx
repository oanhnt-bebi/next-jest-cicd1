interface PageProps {
  params: {
    slug: string;
  };
}

// Generate metadata
export async function generateMetadata({ params }: PageProps) {
  return { title: `Post: ${params.slug}` };
}

// Page component
export default function Page({ params }: PageProps) {
  return <h1>Slug: {params.slug}</h1>;
}