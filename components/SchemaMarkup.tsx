import Script from 'next/script';

interface SchemaMarkupProps {
  schema: Record<string, any>;
  id: string;
}

export default function SchemaMarkup({ schema, id }: SchemaMarkupProps) {
  return (
    <Script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
